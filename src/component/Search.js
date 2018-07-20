import React from 'react';
	
export class Search extends React.Component{

		constructor(props)
		{
			super(props);
			this.handleClick=this.handleClick.bind(this);
		}

	 handleClick(e){
	 	this.props.handleSearchTextChange(document.getElementById("textbox").value);

	}

	render(){
		return(
			<span>
			<li className="nav-item">
	        <input type="text" id="textbox" placeholder="Enter Name to Search"  className="form-control"/>
	        </li>
	        <li className="nav-item" >
	        <button className="btn btn-success form-control" onClick={this.handleClick}>Search</button>
	        </li>
	        </span>
			);
	}
}