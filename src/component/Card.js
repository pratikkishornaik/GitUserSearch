  import React from 'react';
  import Repos from './Repos';
  import Loader from './loadercomp';
  export class Card extends React.Component{
    constructor(){
      super();
      this.renderComponents=this.renderComponents.bind(this); 
    }

    renderComponents(obj)
  {   
      return(
      <div  key={obj.login}>
        <div className="shadow p-4 mb-4 bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="rounded-circle pull-right" src={obj.avatar_url} alt="user_profile" height="100px" width="100px" />
            </div>

          <div className="col-md-7">
            <h3>{obj.login}</h3><br/>
            <label>Profile:&nbsp; </label><a target="_blank" href={obj.html_url}>{obj.html_url}</a><br/>
            <label>Score:</label>{ (obj.score).toFixed(2)}<br/>
          </div>
          <div className="col-md-1">
          </div>
        </div> 
          <Repos userurl={obj.login}/>
        <div className="clearfix"></div> 
        </div>
        </div>
      );
    }
  

  render(){
    let loadcomp=(< Loader />);
    var total_count=(<span><strong>Total Results: {this.props.total_results} </strong></span>);

    return(
      <div>
      <loader />
      {this.props.loading?loadcomp: null}
      {this.props.total_results!=0 ? total_count:(null) }
      {this.props.users.map(this.renderComponents)}
    </div>
    );
  }
}

