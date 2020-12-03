/* eslint-disable no-unused-expressions */
import react from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import userlog from '../../Imagens/userlog.png'
import axios from 'axios'


function Login(){

    const [emailog, setEmailog] = useState('');
    const[password, setPassword] = useState(''); 

    const history = useHistory();

    let login;

    function log(event){
        event.preventDefault();

        axios.get('http://localhost:3333/nome').then(response => {
                const results = response.data;

                if(emailog === "" || password === ""){
                    alert('Preencha todos os campos.');
                }else{
                    login = results.some(({email, senha}) => {
                        return emailog === email && password === senha;
                    
                    })
                }
                    if(login){
                        history.push('/home');
                        
                    }else{
                        alert('Dados incorretos. Digite novamente ou se cadastre.')
                    }
            })

        
        }
    return(
        <div>
        <form className='form' action="">
            <div className="card">
                <div className="card-top">
                    <img src={userlog} alt="" className="img"/>
                    <h3 className="title"><p>Faça seu login</p></h3>
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
                    <button 
                    type="submit"
                    onClick={log}
                    >Confirmar</button>
                </div>
                
             
                <div className="card-cad">
                <p>Não é cadastrado? <Link to="/cadastro">Cadastre-se</Link> </p>
                   
                 </div>
                
            </div>
        </form>
        </div>


      
 
      );
    }


export default Login;