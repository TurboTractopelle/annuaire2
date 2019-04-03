import React, { Component } from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions/actions"

class Section extends Component {

    
componentDidMount(){
    const sectionId = this.props.match.params.section
    this.props.getList(sectionId)
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
        getList : (sectionId)=> dispatch(actions.getList(sectionId))
    })
}

export default connect(stateToProps,dispatchToProps)(Section);