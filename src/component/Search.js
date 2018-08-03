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
		
	}

	render(){
		return(
			<form 
			onSubmit={(e)=>{e.preventDefault();
			this.props.callApi(document.getElementById('textbox').value)}}>
			<span>
			<li className="nav-item">
	        <input type="text" id="textbox" placeholder="Enter UserName"  className="form-control"/>
	        <input type="submit" className="btn btn-success float-right" value="Search" />
	        </li>
	        </span>
			</form>
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

