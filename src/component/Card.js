  import React from 'react';

export class Card extends React.Component{

    constructor(){
      super();
      this.renderComponents=this.renderComponents.bind(this); 

    }


  renderComponents(obj)
  {

    return(
      <div className="shadow p-4 mb-4 bg-white">
        <div className="row">
            <div className="col-md-4">
              <img className="rounded"/>
            </div>

          <div className="col-md-6">
            <h3></h3><br/>
            <label>Profile:&nbsp; </label>{obj.login}<br/>
            <label>Data one:</label><br/>
            <label>Data Two:</label><br/>
          </div>
          <div className="col-md-2">
          </div>
        </div>              
      </div>
      );


  }

  render(){

    //console.log(typeof this.props.users);
    console.log(  );
    return(this.props.users.map(this.renderComponents));
    
  }
}

