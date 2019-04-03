import React, { Component } from 'react';
import * as actions from "../../store/actions/actions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class Home extends Component {

componentDidMount(){
    if(this.props.sections.length == 0){
        this.props.getSections()   
    }
}



render() {

    const loading = this.props.loading && this.props.sections.length !==0 ? "Loading..." : null
    
    return (
        <div>
            <h2>sections</h2>
                <p>{loading}</p>
                <ul>
    {this.props.sections ? this.props.sections.map(item=>{
        return <li key={item.id}><Link to={"/section/" + item.id}>{item.title}</Link></li>
    }) : null}
                
                </ul>
        </div>
    );
}
}

const stateToProps = state => {
    return({
        sections: state.sections,
        loading: state.loading
    })
}

const dispatchToProps = dispatch =>{
    return({
        getSections: ()=>dispatch(actions.getSections())
    })
}

export default connect(stateToProps, dispatchToProps)(Home);
