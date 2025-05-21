import './janela_barra.scss';

type JanelaBarraProps = {
    guiaNome: string;
}

function JanelaBarra({guiaNome}: JanelaBarraProps){
    return (
        <div className='janela-barra'>
                    <h1 className='janela-barra_titulo'>{guiaNome}</h1>
                    <nav className='janela-barra_botoes'>
                        <p className='janela-barra_botoes_botao'>_</p>
                        <p className='janela-barra_botoes_botao'>□</p>
                        <p className='janela-barra_botoes_botao'>x</p>
                    </nav>
        </div>
    )
}

export default JanelaBarra;