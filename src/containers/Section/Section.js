import React, { Component } from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions/actions"
import Item from "../../components/Item/Item"

class Section extends Component {

    
componentDidMount(){
    const sectionId = this.props.match.params.section
    this.props.getList(sectionId)
}

componentWillUnmount(){
    this.props.clearList()
}

render() {
    const loading = this.props.loading && "Loading..."
    const list = this.props.list.map(item => item.data.title ? <Item key={item.id} {...item} /> : null )
   
    return (
        <div>
            <h1>{this.props.sectionInfo.title}</h1>
            <p>{this.props.sectionInfo.desc}</p>
            {loading}
            {list}
        </div>
    );
}
}

const stateToProps = state => {
    return({
        list: state.list,
        loading: state.loading,
        sectionInfo: state.sectionInfo
    })
}

const dispatchToProps = dispatch => {
    return({
        getList : (sectionId)=> dispatch(actions.getList(sectionId)),
        clearList: ()=>dispatch(actions.clearList())        
    })
}

export default connect(stateToProps,dispatchToProps)(Section);