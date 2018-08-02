import React from 'react';
import {Sort} from './Sort';
import Search from './Search';
import {HttpService} from './HttpService';
import {Card} from './Card';
import { connect } from 'react-redux';
import{bindActionCreators} from 'redux';
import {Paginations} from './Pagination';
import {callApi} from '../action/actions';

  class Page extends React.Component {

	constructor(){
		super();
		this.state = {resp:[],page_count:null,query_text:null};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}

	onSearchTextChange(query){
	let self = this;
	var url=`https://api.github.com/search/users?q=${query}`;
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
                <Search />
              </ul>
            </nav>
            <div className="jumbotron bg-light" >
			<div className="row">
	            <div className="col-md-4"></div>
				<div className="col-md-4">
				{/* <Card users={this.state.resp} total_results={this.state.total_results} /> */}
				</div>
				<div className="col-md-4"></div>
			</div>
			<Paginations users={this.state.resp} query={this.state.query_text} onPageChange={this.onSearchTextChange} total_results={this.state.total_results} />
            </div>
        </div>
     );
	}
}//class


function mapStateToProps(state){
	console.log("mapsToprops",state);
	return{
		userData:state
	};
}
function mapDispatchToProps(dispatch){

	// return({
	// 	fetchUsers:(query)=>{dispatch({type:'fetch_Users',query:query})},
	// });
}

 export default connect(mapStateToProps,mapDispatchToProps)(Page);
 //export default Page;