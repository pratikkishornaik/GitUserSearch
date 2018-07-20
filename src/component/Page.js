import React from 'react';
import {Sort} from './Sort';
import {Search} from './Search';
import {HttpService} from './HttpService';
import {Card} from './Card';
var resp;
export class Page extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}

	onSearchTextChange(query){
		let self = this;
	var url=`https://api.github.com/search/users?q=${query}`;
		HttpService(url).then(function(response){
		console.log(response.data);
		self.setState({resp:response.data})
		});
	
	}

	render(){
		return(
		<div className="container-fluid" >
            <nav className="navbar navbar-expand-sm bg-primary">
              <ul className="navbar-nav ">
              <li className="nav-item">
                  <Sort />
                </li>&nbsp;&nbsp;&nbsp;	
                <Search handleSearchTextChange={this.onSearchTextChange} />
              </ul>
            </nav>
            <div className="jumbotron bg-light">
            <Card users={this.state.resp} />
            </div>

        </div>
     );

	}
}//class