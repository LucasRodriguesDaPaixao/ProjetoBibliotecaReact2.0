import React from 'react';
import Cad_livro from '../Imagens/Cad_livro.jpg'
import Lista_Livros from '../Imagens/Lista_Livros.jpg'

import './Images.css'

function Images(){

    return(
        <div className="Imagens">
            <div className="card-ima">
                <div className="card-top-ima">
                    <div className="card-group-ima">
                        <div className="imagem">
                            <img src={Lista_Livros} alt="lista de livros" className="imagem1"></img>
                        </div>        
                     </div>
                </div>
                Gostaria de ver a lista de livros do nosso site? Clique na opção "Lista de Livros" acima e veja todos os livros cadastrados.
            </div>
        <div className="card-ima">
            <div className="card-top-ima">
                <div className="card-group-ima">
                    <div className="imagem">
                        <img src={Cad_livro} alt="cadastro de livros" className="imagem2"/>
                    </div>
                </div>
            </div>
            Gostaria de cadastrar algum livro no nosso site? Clique na opção "Cadastrar Livros" e cadastre o seu livro.
        </div>
           
        <div className="card-text">
            <h3 className="title-ima">Tanto a leitura quanto a escrita são práticas sociais de suma importância para o desenvolvimento da cognição humana.

            Ambas proporcionam o desenvolvimento do intelecto e da imaginação, além de promoverem a aquisição de conhecimentos.

            Dessa maneira, quando lemos ocorrem diversas ligações no cérebro que nos permitem desenvolver o raciocínio. Além disso, com essa atividade aguçamos nosso senso crítico por meio da capacidade de interpretação.

            Nesse sentido, vale lembrar que a “interpretação” dos textos é uma das chaves essenciais da leitura. Afinal, não basta ler ou decodificar os códigos linguísticos, faz-se necessário compreender e interpretar essa leitura.
            </h3>
        </div>
        </div>
    );
}

export default Images;