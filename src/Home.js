import React from "react";
import facade from "./apiFacade";
const Home = (props) => {
    return ( 
    <div className="content my-3">
        <div className="row" style={{margin: "0"}}>
            <div className="col-7 col-sm-8 col-md-9 col-lg-10 p-3 maincontent">
                <p>Home</p>
                <div className="container">
                        <button type="button" className="btn btn-success" onClick={() => {facade.logout(); props.onChange();}}>Log Out</button>
                    </div>
            </div>
        </div>
    </div>
    );
}
export default Home;