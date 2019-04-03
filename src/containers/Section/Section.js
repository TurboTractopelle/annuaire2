import React, { Component } from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions/actions"
import Item from "../../components/Item/Item"

class Section extends Component {

    
componentDidMount(){
    const sectionId = this.props.match.params.section
    this.props.getList(sectionId)
}

render() {

    const loading = this.props.loading && "Loading..."

    const list = this.props.list.map(item => item.data.title ? <Item key={item.id} {...item} /> : null )


    return (
        <div>
            <h1>Section</h1>
            {loading}
            {list}
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