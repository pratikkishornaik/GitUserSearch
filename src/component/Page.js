import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import Paginations from './Pagination';

  class Page extends React.Component {
	render(){
		return(
		<div className="container-fluid" >
            <nav className="navbar navbar-expand-sm bg-dark">
              <ul className="navbar-nav ">
              <li className="nav-item">
                  
                </li>&nbsp;&nbsp;&nbsp;	
                <Search />
              </ul>
            </nav>
            <div>
			<Paginations/>
            </div>
        </div>
     );
	}
}//class
function mapStateToProps(state){
  return{}
}
function mapDispatchToProps(dispatch){
return{}
}

 export default connect(mapStateToProps,mapDispatchToProps)(Page);
 //export default Page;