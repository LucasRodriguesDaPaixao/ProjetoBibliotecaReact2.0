import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import userlog from '../../Imagens/userlog.png'
import './Cadastro.css'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Cadastro(){

    const history = useHistory(); 
    const [nome, setNome] = useState('');
    const [emailog, setEmailog] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const data = {
        "email": emailog,
        "senha": password
    }

    function log(event){
        event.preventDefault();


    if(password !== confirmPassword){
        alert('Senhas não conferem.');
    }else{
        axios
            .post('http://localhost:3333/nome', data)
            .then(resp => {
                alert("Usuário criado com sucesso.");
                history.push('/');
            });

    }
}

    return(
        <>
           
           <form className='form' action="">
            <div className="card">
                <div className="card-top">
                    
                    <img src={userlog} alt="" className="img"/>
                    <h3 className="title"><p>Faça seu Cadastro</p></h3>
                </div>

                <div className="card-group">
                    <label>Nome:</label>
                        <input 
                        type="text"
                        name="text"
                        placeholder="Digite o seu nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value) }
                        required
                        />

                </div>

                <div className="card-group">
                    <label>Email:</label>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Digite o seu email"
                        value={emailog}
                        onChange={(event) => setEmailog(event.target.value) }
                        required
                        />

                </div>
                <div className="card-group">
                <label>Senha:</label>
                        <input 
                        type="password" 
                        name="senha" 
                        placeholder="Digite a sua senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value) }
                        required
                        />

                </div>

                <div className="card-group">
                <label>Confirmar a senha:</label>
                        <input 
                        type="password" 
                        name="senha" 
                        placeholder="Digite a sua senha"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value) }
                        required
                        />

                </div>

                <div className="card-group">
                    <button
                     type="submit"
                     onClick={log}
                     >Cadastrar</button>
                </div>
                 
            </div>
        </form>
        </>
    );
}

export default Cadastro;