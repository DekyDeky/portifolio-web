import Typewriter from 'typewriter-effect';
import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";
import '../../styles/helloWorld.scss'

const welcomeMsg = [
    "> Olá! <br>", 
    "> Eu sou Deky, <br>",
    "> sou um estudante de programação! <br>",
    "> Seja bem-vinde a minha base! <br>",
    "> "
];

const button = [
    "+---------+<br>",
    "| INICIAR |<br>",
    "+---------+"
]

type props = {
    setShowHome : (valor: boolean) => void;
}

function HelloWorld({ setShowHome }: props){

    const [welcomeTerminou, setWelcomeTerminou] = useState(false);
    const [helloVisibility, sethelloVisibility] = useState(true);

    const disableHello = () => {
        sethelloVisibility(false);
        setShowHome(true);
    }

    return <main className='home'>
        <AnimatePresence initial={false}>

        {helloVisibility ? (

            <motion.section 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className='home_introducao'>

                <div className='home_introducao_barra'>
                    <h1 className='home_introducao_barra_titulo'>Hello_World.exe</h1>
                    <nav className='home_introducao_barra_botoes'>
                        <p className='home_introducao_barra_botoes_botao'>_</p>
                        <p className='home_introducao_barra_botoes_botao'>□</p>
                        <p className='home_introducao_barra_botoes_botao'>x</p>
                    </nav>
                </div>
                <div className='home_introducao_texto'>
                    <div className='welcomeMsg'>
                        <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString(welcomeMsg[0] + welcomeMsg[1] + welcomeMsg[2] + welcomeMsg[3] + welcomeMsg[4])
                            .pauseFor(250)
                            .callFunction(() => {setWelcomeTerminou(true)})
                            .start()
                        }}
                        options={{
                            cursor: '_',
                            delay: 80,
                            autoStart: true
                        }}/>
                    </div>

                    {welcomeTerminou && 
                        <button 
                        className='home_button' 
                        id='home_button'
                        onClick={disableHello}
                        >
                            <Typewriter options={{
                                strings: button[0] + button[1] + button[2],
                                cursor: '',
                                autoStart: true,
                                delay: 80
                            }}/>
                        </button>
                    }
                </div>
            </motion.section>
            ) : null}

</AnimatePresence>
</main>
}

export default HelloWorld;