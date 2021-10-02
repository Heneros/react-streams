import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () =>{
    return (
        <div>
        PageOne
        <Link to="/pagetwo">Navigate to page two</Link>
</div>
    )
}

const PageTwo = () =>{
    return (
        <div>
        PageOne
        <Link to="/pageone">Navigate to page one</Link>
</div>
    )
}


const App = () => {
    return (
        <div>
        <BrowserRouter>
        <div>
            <Route page="/" exact component={PageOne} />
            <Route page="/pagetwo" component={PageTwo} />
            </div>
        </BrowserRouter>
    </div>
    );
};

export default App;