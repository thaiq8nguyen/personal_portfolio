import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
const AppRouter = () => {
    return (
        <>
            <CssBaseline/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
            
        </>
    )
}

export default AppRouter
