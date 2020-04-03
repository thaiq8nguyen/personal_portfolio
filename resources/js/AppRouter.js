import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"

const theme = {
    typography: {
        fontFamily: "Raleway"
    },
    

}

const custom = createMuiTheme(theme)
const AppRouter = () => {
    return (
        <>  
            
            <MuiThemeProvider theme={custom}>
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
            
            
        </>
    )
}

export default AppRouter
