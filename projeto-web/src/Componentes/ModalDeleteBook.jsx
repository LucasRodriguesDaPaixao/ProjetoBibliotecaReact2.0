import Axios from 'axios';
import React from 'react';
import Modal from 'react-modal'

function ModalDeleteBook({isOpen, data})
{
    async function handleDeleteUser(data)
    {
        try
        {
            await Axios.delete(`http://localhost:3333/book/${data.id}`)
            window.location.reload(true);
        }
        catch(e)
        {
            alert(`Não foi possível deletar o item: \nErro: ${e}`);
        }
        
    }

    return(
        <Modal isOpen={isOpen} ariaHideApp={false}>
            <h2>Confirmação</h2>
            <p>Tem certeza que deseja excluir o usuário?</p>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {handleDeleteUser(data)}}
                >Deletar
            </button>
            <button
                type="submit"
                className="btn btn-danger"
                onClick={() => {window.location.reload(true)}}
                >Cancelar
            </button>
        </Modal>
    );
}

export default ModalDeleteBook;