import React from 'react';
import {Card} from './Card';
import Sort from './Sort';
import { connect } from 'react-redux';
import Loader from './loadercomp';
import { callApi } from '../action/actions';
import { bindActionCreators } from 'redux';

class Paginations extends React.Component{

    constructor(props){
        super(props);
        this.state={
        lastpage:4,};
        this.onPageClick=this.onPageClick.bind(this);
        this.generatePageLinks=this.generatePageLinks.bind(this);
    }
   
    generatePageLinks(index){
        return(this.props.activePage==index ? (<li key={index} className="page-item active" ><a key={index} onClick={this.onPageClick} className="page-link"  >{index}</a></li>):
        (<li key={index} className="page-item " ><a key={index} onClick={()=>this.onPageClick(index)} className="page-link"  >{index}</a></li>));                        
    }
    
    onPageClick(e){
    console.log("index",e);
    if (e!='...')
    this.props.callApi(this.props.query,e);
    }

    pagination(c, m) {
      var current = c,
          last = m,
          delta = 2,
          left = current - delta,
          right = current + delta + 1,
          range = [],
          rangeWithDots = [],
          l;
      for (let i = 1; i <= last; i++) {
          if (i == 1 || i == last || i >= left && i < right) {
              range.push(i);
          }
      }
      for (let i of range) {
          if (l) {
              if (i - l === 2) {
                  rangeWithDots.push(l + 1);
              } else if (i - l !== 1) {
                  rangeWithDots.push('...');
              }
          }
          rangeWithDots.push(i);
          l = i;
      }
      return rangeWithDots;
  }
  
     render()
    {   
        var content=[];
        var noofpages= (Math.ceil(this.props.total_results/10));
        let pagearray=this.pagination(this.props.activePage,noofpages);
        content.push(pagearray.map(this.generatePageLinks));
        let card=(
                    <div>
                        <Card users={this.props.users} loading={this.props.loading} total_results={this.props.total_results}/>
                        <ul className="pagination float-right">
                        {content}
                        </ul> 
                    </div>
            );

        let loadcomp=(<Loader />);
    return(
        <div>
            <Sort />
          <div className="row">
	            <div className="col-md-3"></div>
				<div className="col-md-6">
                {this.props.loading?loadcomp: card}
				</div>
				<div className="col-md-3"></div>
			</div>
        </div>
        );
    }
}//class

function mapStateToProps(state){
    return{
        users:state.rootReducer.userData,
        loading:state.rootReducer.loading,
        total_results:state.rootReducer.total_results,
        activePage:state.rootReducer.activePage,
        query:state.rootReducer.query,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({callApi},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Paginations);




    