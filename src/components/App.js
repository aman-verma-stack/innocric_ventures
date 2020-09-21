import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';


class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                    <Router>
                        <Routes />
                    </Router>
                <Footer title="@copyright" />
            </>
        )
    }
}


export default App;