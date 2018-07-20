  import React from 'react';

export class Card extends React.Component{

  render(){

    console.log(JSON.stringify(this.props.users));

    return(
        <div className="shadow p-4 mb-4 bg-white">
          <div className="row">
              <div className="col-md-4">
                <img className="rounded"/>
              </div>

            <div className="col-md-6">
              <h3></h3><br/>
              <label>Profile</label><br/>
              <label>Data one:</label><br/>
              <label>Data Two:</label><br/>
            </div>
            <div className="col-md-2">
            </div>
          </div>              
        </div>
        );
  }
}

