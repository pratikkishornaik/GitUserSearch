import React from 'react';
import {Sort} from './Sort';
import {Search} from './Search';
import {HttpService} from './HttpService';
import {Card} from './Card';
import {Paginations} from './Pagination';

export class Page extends React.Component {

	constructor(props){
		super(props);
		this.state = {resp:[],page_count:null,query_text:null};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}

	onSearchTextChange(query,pageno=1){
		let self = this;
	var url=`https://api.github.com/search/users?per_page=10&q=${query}&page=${pageno}`;
	console.log(url);
		HttpService(url).then(function(response){
		console.log(response.data);
		self.setState({resp:response.data.items,
			total_results:response.data.total_count,
			query_text:query,
			});
			
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
                <Search handleSearchTextChange={this.onSearchTextChange}  />
              </ul>
            </nav>
            <div className="jumbotron bg-light" >
            <Card users={this.state.resp} total_results={this.state.total_results} />
			<Paginations query={this.state.query_text} onPageChange={this.onSearchTextChange} total_results={this.state.total_results} />
            </div>
        </div>
     );
	}
}//class