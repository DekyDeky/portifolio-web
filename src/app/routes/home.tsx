import { useEffect, useState } from 'react';
import HelloWorld from "./home/helloWorld"
import HomePage from './home/homePage';

function Home(){
    const [showHome, setShowHome] = useState(false);
    const [visitou, setVisitou] = useState(false);

    useEffect(() => {
        if(document.cookie){
            setShowHome(true)
            setVisitou(true);
        }
    }, [])

    return (
        <main>
            {!visitou && <HelloWorld setShowHome={setShowHome}/>}
            {showHome && <HomePage/>}
        </main>
    )
}

export default Home;