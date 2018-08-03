import React from 'react';
import { connect }	 from 'react-redux';
import { callApi } from '../action/actions';
import { callLoader } from '../action/actions';
import{bindActionCreators} from 'redux';

class Search extends React.Component{

		constructor(props)
		{
			super(props);
			this.state={
				loading:false,
			}
			this.handleClick=this.handleClick.bind(this);
		}

	 handleClick(e){
		e.preventDefault();
		this.props.callLoader(document.getElementById('textbox').value);
		this.props.callApi(document.getElementById('textbox').value,1);
		
	}

	render(){
		return(
			<form 
			onSubmit={this.handleClick}>
			<span>
			<li className="nav-item">
	        <input required type="text" id="textbox" placeholder="Enter UserName"  className="form-control"/>
	        <input type="submit" className="btn btn-success float-right" value="Search" />
	        </li>
	        </span>
			</form>
			);
	}
}

function mapDispatchToProps(dispatch){

	return bindActionCreators({callApi:callApi,callLoader:callLoader},dispatch);
}

export default connect(null,mapDispatchToProps)(Search);

