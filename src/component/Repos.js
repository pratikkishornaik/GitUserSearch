import React from 'react';
import {HttpService} from './HttpService';

export class Repos extends React.Component{

    constructor(){
        super();
        this.state=({showRepo:false,repoDetails:[]});
        this.repoToggle=this.repoToggle.bind(this);
        this.getRepoDetails=this.getRepoDetails.bind(this);
        this.renderRepoRecords=this.renderRepoRecords.bind(this);
    }

    repoToggle(){
    this.setState({showRepo:!this.state.showRepo});
    this.getRepoDetails();
    }

    getRepoDetails(){
        let self=this;
        if(this.state.repoDetails.length>0)
        {return;}
        let url=`https://api.github.com/users/${this.props.userurl}/repos`;
        HttpService(url).then(function(response){
           console.log(response.data);
           self.setState({repoDetails:response.data
                });
            });
    }

    renderRepoRecords(obj){
        return(
            <tr>
               <td><b><a href={obj.html_url} target="_blank">{obj.name}</a></b></td>
               <td>{obj.forks_count}</td>
            </tr>
        );
    }


    render(){

        if( this.state.showRepo){

        return(
            <div >
                <button onClick={this.repoToggle} className="btn float-right  btn-primary">Collapse</button><br /><br />

            <table className="table text-center table-striped">
            <tbody>
            <tr><th colSpan="2">Repositories</th></tr>
            <tr><th>Repo Name</th><th>Fork Count</th></tr>
            {this.state.repoDetails.map(this.renderRepoRecords)}
            </tbody>
            </table>

        </div>
        );

       }
       else
       {
        return(
            <button onClick={this.repoToggle}  className="btn float-right btn-primary">Details</button>
        );
       }
        

    
    }


}