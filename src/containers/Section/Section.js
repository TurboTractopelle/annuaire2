import React, { Component } from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions/actions"

class Section extends Component {

    
componentDidMount(){
    console.log(this.props.match.params.section)
}

render() {

    const loading = this.props.loading && "Loading..."

    return (
        <div>
            <h1>Section</h1>
            {loading}
            {this.props.list}
        </div>
    );
}
}

const stateToProps = state => {
    return({
        list: state.list,
        loading: state.loading
    })
}

const dispatchToProps = dispatch => {
    return({
        getList : ()=> dispatch(actions.getList())
    })
}

export default connect(stateToProps,dispatchToProps)(Section);