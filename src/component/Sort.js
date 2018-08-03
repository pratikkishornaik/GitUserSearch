import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {sortUserData} from '../action/actions';

class Sort extends React.Component{


  handleSelection(e){
    this.props.sortUserData(e.target.value,this.props.userData);
  }


  render(){
		return(
			<select className="form-control" onChange={this.handleSelection.bind(this)} > 
                    <option value="sortByAZ">Name (A-Z)</option>
                    <option value="sortByZA">Name (Z-A)</option>
                    <option value="sortByRankAsc">Rank ascending</option>
                    <option value="sortByRankDec">Rank descending</option>
                  </select>
			);
  }
  
}//class 

function mapStateToProps(state){
  return{userData:state.rootReducer.userData,};

}

function mapDispatchToProps(dispatch){

  return bindActionCreators({sortUserData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort);

