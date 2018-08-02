import React from 'react';

export class Sort extends React.Component{

	render(){
		return(
			<select className="form-control"> 
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                    <option>Rank ascending</option>
                    <option>Rank descending</option>
                  </select>
			);
	}
  
}