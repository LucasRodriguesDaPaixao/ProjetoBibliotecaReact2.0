import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-md ">
            <div className="navbar-collapse collapse w-100 ">
                <ul className="navbar-nav mr-auto">
                   
                    <li className="nav-item">
                       <b> <Link to="/listBook" className="nav-link">Lista de Livros</Link></b>
                    </li>
                </ul>
            </div>
        <div className="mx-auto order-0">
            <b><Link to ="/home" className="navbar-brand mx-auto">Biblioteca</Link></b>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
         <div className="navbar-collapse collapse w-100  ">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <b><Link to="/newBook" className="nav-link">Cadastro de Livros</Link></b>
                </li>
                
            </ul>
        </div>
        </nav>
    );
}

export default NavBar;