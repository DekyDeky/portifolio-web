import { useState } from 'react';
import HelloWorld from "./home/helloWorld"
import HomePage from './home/homePage';

function Home(){
    const [showHome, setShowHome] = useState(false);

    return (
        <main>
            <HelloWorld setShowHome={setShowHome}/>
            {showHome && <HomePage/>}
        </main>
    )
}

export default Home;