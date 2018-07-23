import React from 'react';

export class Paginations extends React.Component{
    
    constructor(props){
        super(props);
        this.state={activePage:1,};
        this.onPageClick=this.onPageClick.bind(this);
    }

    generatePageLinks(text,number){
      return(this.state.activePage==number? (<li key={number} className="page-item active " ><a key={number} onClick={this.onPageClick} className="page-link"  >{text}</a></li>):
    (<li key={number} className="page-item " ><a key={number} onClick={this.onPageClick} className="page-link"  >{text}</a></li>));                        
    }
    
    onPageClick(e){
       this.setState({activePage:e.target.text});
       e.target.text=='Previous' ?this.props.onPageChange(this.props.query,--this.state.activePage)(this.setState({activePage:--this.state.activePage})):this.props.onPageChange(this.props.query,e.target.text );
       e.target.text=='Next' ?this.props.onPageChange(this.props.query,++this.state.activePage)(this.setState({activePage:++this.state.activePage})):this.props.onPageChange(this.props.query,e.target.text );

    }
    
    fetchPageLinks()
    {

    }

    render()
    {   let index;
        var content=[];
      var noofpages= (Math.ceil(this.props.total_results/10)) ;
      
      for (index = 1; index <= (noofpages > 5 ? 5:noofpages) ; index ++) {
        
        content.push(this.generatePageLinks(index,index));

      }
        return(
        <div><ul className="pagination float-right">
        <li  className="page-item  " ><a  onClick={this.onPageClick} className="page-link"  >Previous</a></li>
        {content}
        <li  className="page-item " ><a  onClick={this.onPageClick} className="page-link"  >Next</a></li>
        </ul> </div>
        );
   
    }
    

}