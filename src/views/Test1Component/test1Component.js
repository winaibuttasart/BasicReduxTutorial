import React from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

class Test1Component extends React.Component {

    render() {
        // console.log('this.props1 : ', this.props)
        let { testComponentReducer } = this.props
        let { firstName, lastName } = testComponentReducer
        return (
            <div className='m-3 p-2 '>
                <div className='row'>
                    <div className='col s12 no-padding'>
                        <h1>Test1 Component</h1>
                        <h2 className='pl-3'>Firstname : {firstName}</h2>
                        <h2 className='pl-3'>Lastname : {lastName}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

Test1Component.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    let { testComponentReducer } = state
    return { testComponentReducer }
}

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps
    )
)(Test1Component)
