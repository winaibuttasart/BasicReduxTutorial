import React from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { changeText } from './../../redux/actions/testComponentAction'
const styles = theme => ({})

class Test2Component extends React.Component {

    handleOnInputChange = event => {
        let { name, value } = event.target
        this.props.changeTextAction({ name, value })
    }

    render() {
        // console.log('this.props2 : ', this.props)
        const { classes } = this.props
        return (
            <div className='m-3 p-2'>
                <div className='row'>
                    <h1>Test2 Component</h1>
                    <div className='col s12 m6'>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Firstname"
                            placeholder="Firstname"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            onChange={this.handleOnInputChange}
                        />
                    </div>

                    <div className='col s12 m6'>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Lastname"
                            placeholder="Lastname"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            onChange={this.handleOnInputChange}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

Test2Component.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    let { testComponentReducer } = state
    return { testComponentReducer }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTextAction: payload => dispatch(changeText(payload))
    }
}

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Test2Component)
