import React from 'react';
import { connect }	 from 'react-redux';
import { bindActionCreators } from 'redux';
import {getRepos} from '../action/actions';

class Repos extends React.Component{

    constructor(){
        super();
        this.state=({showRepo:false,repoDetails:[]});
        this.repoToggle=this.repoToggle.bind(this);
        this.renderRepoRecords=this.renderRepoRecords.bind(this);
    }

    repoToggle(username){
    // console.log(username);
    this.setState({showRepo:!this.state.showRepo});
    (this.props.repoData.length>0 ? null:this.props.getRepos(username));
    
    }
  
    renderRepoRecords(obj){
        return(
            <tr key={obj.name}>
               <td><a href={obj.html_url} target="_blank">{obj.name}</a></td>
               <td>{obj.forks_count}</td>
            </tr>
        );
    }

    render(){
        let Loading=(<tr><th colSpan="2">Loading...</th></tr>);
        let heading=(<tr><th>Repo Name</th><th>Fork Count</th></tr>);

        if( this.state.showRepo){
        return(
            <div key="repodata">
            <button onClick={this.repoToggle} className="btn float-right  btn-primary">Collapse</button><br /><br />
            <table className="table text-center table-striped">
            <thead>
            </thead>
            <tbody>
            <tr><th colSpan="2">Repositories</th></tr>
             {(this.props.repoData.length === 0) ? Loading:heading} 
            {this.props.repoData.map(this.renderRepoRecords)}
            </tbody>
            </table>

        </div>
        );

       }
       else
       {
        return(
            <button onClick={()=>this.repoToggle(this.props.userurl)}  className="btn float-right btn-primary">Details</button>
        );
       }
    }
}

function mapStateToProps(state){
    state;
   return{ repoData: state.rootReducer.repoData};


}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getRepos},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Repos);