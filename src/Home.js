import React from "react";
import facade from './apiFacade.js';
const Home = () => {
    facade.registration("bo", "kevin")
    return ( 
    <div>
        <p>Home</p>
    </div>
    );
}
export default Home;