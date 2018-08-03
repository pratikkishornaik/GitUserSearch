import React from 'react';
import Sort from './Sort';
import Search from './Search';
import { connect } from 'react-redux';
import Paginations from './Pagination';

  class Page extends React.Component {
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