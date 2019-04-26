import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import CycleBlockingDemo from "./pages/CycleBlockingDemo";
import BlockingImageDemo from "./pages/BlockingImageDemo";
import NonblockingImageDemo from './pages/NonblockingImageDemo';

import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/demo-1">Демо 1</Link>
                            </li>
                            <li>
                                <Link to="/demo-2">Демо 2</Link>
                            </li>
                            <li>
                                <Link to="/demo-3">Демо 3</Link>
                            </li>
                        </ul>
                    </nav>
                    <main className="main">
                        <Route
                            path="/demo-1"
                            exact
                            component={CycleBlockingDemo}
                        />
                        <Route path="/demo-2" component={BlockingImageDemo} />
                        <Route path="/demo-3" component={NonblockingImageDemo} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
