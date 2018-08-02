import React from 'react';
import { connect }	 from 'react-redux';
import { callApi } from '../action/actions';
import{bindActionCreators} from 'redux';

class Search extends React.Component{

		constructor(props)
		{
			super(props);
			this.handleClick=this.handleClick.bind(this);
		}

	 handleClick(){

	 	//this.props.callApi();
	}

	render(){
		return(
			<span>
			<li className="nav-item">
	        <input type="text" id="textbox" placeholder="Enter UserName"  className="form-control"/>
	        </li>
	        <li className="nav-item" >
	        <button className="btn btn-success form-control" onClick={()=>this.props.callApi(document.getElementById('textbox').value)}>Search</button>
	        </li>
	        </span>
			);
	}
}
// function mapStateToProps(state){
// 		return{userData:state};
// }
function mapDispatchToProps(dispatch){

	return bindActionCreators({callApi},dispatch);
}

export default connect(null,mapDispatchToProps)(Search);

