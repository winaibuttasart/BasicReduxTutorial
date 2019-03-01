import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import Test1Component from './views/Test1Component/test1Component'
import Test2Component from './views/Test2Component/test2Component'

const styles = theme => {
  // console.log('theme : ', theme)
  return {
    paper: {
      color: theme.palette.text.secondary,
    },
    head: {
      color: theme.palette.getContrastText(theme.palette.primary[800]),
      backgroundColor: theme.palette.primary[800],
      textAlign: 'center',
      margin: 0,
      padding: theme.spacing.unit * 3
    }
  }
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h1 className={classes.head}>Redux Tutorial</h1>
        <div className='row'>
          <div className='col s12'>
            <Paper className={classes.paper}>
              <Test1Component />
            </Paper>
          </div>
          <div className='col s12'>
            <Paper className={classes.paper}>
              <Test2Component />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
