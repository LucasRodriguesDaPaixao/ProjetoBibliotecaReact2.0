import Axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';
import NavBar from '../../Componentes/NavBar';

function NewBook()
{
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState([]);
    
    
     const categoryList = [
                       {value: "romance", label: "Românce"},
                       {value: "ficcao_cientifica", label:"Ficção Científica"},
                       {value: "comedia", label:"Comédia"},
                       {value: "saude", label:"Saúde"},
                       {value: "ficcao_juvenil", label:"Ficção Juvenil"},
                       {value: "informativo", label:"Informativo"},
                       {value: "bem_estar", label:"Bem Estar"},
                       {value: "fantasia", label:"Fantasia"},
                       {value: "terror", label:"Terror"},
                      ];

    
    const data = 
    {
        "title": title,
        "autor": autor,
        "publisher": publisher,
        "price": "R$: " + price,
        "category": JSON.stringify(category, null, 2)
    }

    const handleChange = (e) =>
    {
        setCategory(Array.isArray(e) ? e.map(x => x.label) : []);
    }

    function handleSubmit(evt)
    {
        evt.preventDefault();
        //console.log("--------------\nValor selecionado: ", JSON.stringify(category, null, 2));

        if(title === ''
        || autor === ''
        || publisher === ''
        || price === ''
        || category.length === 0)
        {
            alert("Você precisa preencher todos os campos");
        }
        else
        {
            Axios
                .post("http://localhost:3333/book", data)
                .then(resp => 
                    {
                        alert("Livro cadastrado com sucesso\n" + data);
                    })
        }
    }

    return(
        <>
        <NavBar />

        <div className="container">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputTitle">Título do Livro</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputTitle" 
                        placeholder="Título" 
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputAutor">Autor</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputAutor" 
                        placeholder="Autor"
                        value={autor}
                        onChange={evt => setAutor(evt.target.value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputPublisher">Editora</label>
                    <input
                        type="text"
                        className="form-control" 
                        id="inputPublisher" 
                        placeholder="Editora"
                        value={publisher}
                        onChange={evt => setPublisher(evt.target.value)}
                    />
                </div>

                <div classgroup="form-group col-md-4">
                    <label htmlFor="selectCategory">Genero do Livro</label>
                    <Select
                        options={categoryList}
                        value={categoryList.filter(obj => category.includes(obj.label))}
                        onChange = {handleChange}
                        isMulti
                        isClearable
                    />
                        {/* {meuArray.map(item => {
                            return(
                                <option>{item}</option>
                            )
                        })} */}
                </div>
            
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputPrice">Preço</label>
                    <input
                        type="text" 
                        className="form-control" 
                        id="inputPrice"
                        placeholder="R$: "
                        value={price}
                        onChange={evt => setPrice(evt.target.value)}
                    />
                </div>
            </div>

            <div className="form-group">
                <div className="form-check">
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
                >Cadastrar
            </button>
        </div>
        </>
    );
}

export default NewBook;