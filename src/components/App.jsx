import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.less'
import Registration from './registration/Registration';

function App() {
    return (
        <BrowserRouterer>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouterer>
    );
}

export default App;