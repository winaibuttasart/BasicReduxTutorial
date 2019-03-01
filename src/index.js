import React from 'react';
import ReactDOM from 'react-dom';
import './styles/myStyle.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import Route from './Route/route'

const theme = createMuiTheme({
    fontFamily: `'Prompt', sans-serif`,
    typography: {
        useNextVariants: true,
        fontFamily: `'Prompt', sans-serif`
    },
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    }
})

ReactDOM.render(
    < Provider store={store} >
        <MuiThemeProvider theme={theme}>
            <Route />
        </MuiThemeProvider>
    </Provider >,
    document.getElementById('root'))

serviceWorker.unregister()
