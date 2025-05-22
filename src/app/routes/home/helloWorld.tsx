import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react";
import JanelaBarra from '../../../components/JanelaBarra/janela_barra';
import '../../styles/home/helloWorld.scss'

const welcomeMsg = [
    "> Inicializando sistemas... <br>", 
    "> Deky.......................OK <br>",
    "> Portifolio.................OK <br>",
    "> Sistema Inicializado! <br>",
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

function HelloWorld({ setShowHome}: props){

    const [welcomeTerminou, setWelcomeTerminou] = useState(false);
    const [helloVisibility, sethelloVisibility] = useState(true);

    const disableHello = () => {
        sethelloVisibility(false);
        setShowHome(true);
        document.cookie = "visitou=true"
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

                <JanelaBarra guiaNome='hello_world.exe'/>
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
                            delay: 25,
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
                                delay: 25
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