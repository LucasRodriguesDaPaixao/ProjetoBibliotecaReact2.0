import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import NewBook from './Pages/NewBook/NewBook'
import ListBook from './Pages/NewBook/ListBook'

function Routes(){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/newBook' component={NewBook}/>
                <Route path='/listBook' component={ListBook}/>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Routes;