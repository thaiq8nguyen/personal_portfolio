import React from 'react'
import { BrowserRouter as Router, ROute, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
            
        </>
    )
}

export default AppRouter
