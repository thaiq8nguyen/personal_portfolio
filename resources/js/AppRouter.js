import React from 'react'
import { BrowserRouter as Router, ROute, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Router>
            
        </>
    )
}

export default AppRouter
