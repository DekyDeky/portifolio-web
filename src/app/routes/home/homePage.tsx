import { useState, useEffect } from 'react';
import bingus from '../../../assets/home/images.jpg';

function HomePage() {   

    const [mostrarCont, setMostrarCont] = useState(false);

    useEffect(() => {
        const esperar = setTimeout(() => {
            setMostrarCont(true)
        }, 500);

        return () => clearTimeout(esperar);
    }, []);

    if (!mostrarCont) return null;

    return (
        <img src={bingus}/>
    )
}

export default HomePage