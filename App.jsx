import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/CustomNavbar';



class App extends Component {
    render(){
    return (
        <Router>
            <div>
            <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />

            </div>
        </Router>
    );
}
}
 

export default App;
