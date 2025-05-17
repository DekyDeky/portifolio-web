import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "motion/react"
import './cabecalho.scss';
import AsciiWrite from '../asciiWrite/asciiWrite';

const moonAscii = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⢂⠑⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢐⢐⠡⠂⠀⠀⠀⠀⠀⠀⡂⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⢀⢂⠢⡁⡊⠀⠀⠀⠀⠀⠁⠁⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢂⠢⡁⡂⡂⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⠄⡑⡐⡐⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⡈⡢⢈⢂⠅⠀⠀⠀⠀⠀⠀⡂⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⢀⠄⡀⠀⠀⠀⢐⢐⠌⠔⡐⠡⡁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠐⡈⠀⠀⠀⠀⠀⠢⠨⢂⢊⠌⠔⡐⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⠅⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠨⢂⢂⢊⠔⡨⠨⡨⢐⠠⢀⢀⠀⡀⢀⢀⠠⠠⠨⡐⠈⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠢⢂⢊⠄⠕⡠⠡⢊⢐⠄⡑⡨⢐⠐⠌⢌⠊⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠁⠂⠌⡢⠨⡈⡂⡢⠡⢂⠢⡁⠪⠈⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠈⠀⠁⠀⠁⠀⠀⠀⠀⠀⠂⠌⠂⠐⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⡂⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";

function Cabecalho(){
    const local = useLocation();
    const ehSelecionado = (path: String) => local.pathname === path;

    return (
        <header className='cabecalho'>
            <div className='cabecalho_titulo'>
                <AsciiWrite label="Arte Ascii da Lua" text={moonAscii}/>
                <h1 className='cabecalho_titulo_texto'> Deky's Moon Base </h1>
            </div>
            <ul className='cabecalho_nav'>
                <li className={`cabecalho_nav_item ${ehSelecionado('/') ? 'selected' : ''}`}> <Link to="/"> Home </Link> </li>
                <li className={`cabecalho_nav_item ${ehSelecionado('/Projetos') ? 'selected' : ''}`}> <Link to="/Projetos">  Projetos </Link> </li>
                <li className={`cabecalho_nav_item ${ehSelecionado('/Blog') ? 'selected' : ''}`}> <Link to="/Blog"> Blog </Link> </li>
                <li className={`cabecalho_nav_item ${ehSelecionado('/SobreMim') ? 'selected' : ''}`}> <Link to="/SobreMim"> Sobre Mim </Link> </li>
            </ul>
        </header>
    )
}

export default Cabecalho;