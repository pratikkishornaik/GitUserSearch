  import React from 'react';
  import {Repos} from './Repos';
  import {HttpService} from './HttpService';

  export class Card extends React.Component{

    constructor(){
      super();
      this.renderComponents=this.renderComponents.bind(this); 
      this.getName=this.getName.bind(this);
    }

  getName(username){
  //  let self=this;
    let url=`https://api.github.com/users/${username}`
    HttpService(url).then(function(response){
        console.log(response);
        return response.data.name;
    });
  }


    renderComponents(obj)
  {   
      return(
      <div>
        <div className="shadow p-4 mb-4 bg-white">
        <div className="row">
            <div className="col-md-3">
              <img className="rounded-circle pull-right" src={obj.avatar_url} alt="user_profile" height="100px" width="100px" />
            </div>

          <div className="col-md-7">
            <h3>{obj.login}</h3><br/>
            <label>Profile:&nbsp; </label><a target="_blank" href={obj.html_url}>{obj.html_url}</a><br/>
            <label>Score:</label>{  (obj.score).toFixed(2)}<br/>
          </div>
          <div className="col-md-2">
          </div>
        </div> 
          <Repos userurl={obj.login}/>
        <div className="clearfix"></div> 
        </div>
        </div>
      );
    }
  

  render(){

    var total_count=(<span><strong>Total Results: {this.props.total_results} </strong></span>);
    //console.log(typeof this.props.users);
    //console.log();
    return(
      <div>
      {this.props.total_results!=null ? (total_count): (null)}
      
    {this.props.users.map(this.renderComponents)}
    </div>
    );
  }
}

