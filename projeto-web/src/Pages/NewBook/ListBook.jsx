import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalDeleteBook from '../../Componentes/ModalDeleteBook';
import ModalEditBook from '../../Componentes/ModalEditBook';
import NavBar from '../../Componentes/NavBar';

function ListBook()
{
    const [loadDelete, setLoadDelete] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);
    const [book, setBook] = useState([]);
    const [bookItem, setBookItem] = useState([]);

    function showEditBook(data)
    {
        setLoadEdit(true);
        setBookItem(data);
    }

    function showDeleteBook(data)
    {
        setLoadDelete(true);
        setBookItem(data);
    }

    useEffect(() =>
    {
        Axios
            .get("http://localhost:3333/book")
            .then(resp =>
                {
                    setBook(resp.data);
                })
    }, [])



    return(
        <>
            {loadDelete && <ModalDeleteBook isOpen={loadDelete} data={bookItem}/>}
            {loadEdit && <ModalEditBook isOpen={loadEdit} bookData={bookItem}/>}

            <NavBar />

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Código do Livro</th>
                        <th scope="col">Título</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map(data =>
                        {
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.autor}</td>
                                    <td>{data.category}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={() => {showEditBook(data)}}
                                            >Editar
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={() => {showDeleteBook(data)}}
                                            >Deletar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default ListBook;