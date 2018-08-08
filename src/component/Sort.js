import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortUserData} from '../action/actions';

class Sort extends React.Component{


  handleSelection(e){
  this.props.sortUserData(e,this.props.userData);
  console.log("event",e);
  }


  render(){

    if(this.props.userData.length===0){
      return(<div> </div>);

    }
    else{
        return(
          <nav className="navbar navbar-expand-sm bg-light ">
                <span className="nav-text">
                Sort By:
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>this.handleSelection('sortByAZ')} href="#">A-Z</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>this.handleSelection('sortByZA')} href="#">Z-A</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>this.handleSelection('sortByRankAsc')} href="#">Score Rank Ascending </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>this.handleSelection('sortByRankDec')} href="#">Score Rank Descending </a>
                    </li>
                </ul>
            </nav>
          );
        }
  }
}//class 

function mapStateToProps(state){
  return{userData:state.rootReducer.userData,};

}

function mapDispatchToProps(dispatch){

  return bindActionCreators({sortUserData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort);

