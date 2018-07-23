import React from 'react';

export class Paginations extends React.Component{
    
    constructor(props){
        super(props);
        this.state={activePage:null,};

        this.onPageClick=this.onPageClick.bind(this);
    }

    generatePageLinks(text,number){
    return(<li key={number} className="page-item " ><a key={number} onClick={this.onPageClick} className="page-link"  >{text}</a></li>);                        
    //href={`https://api.github.com/search/users?per_page=10&q=${this.props.query}&page=${number}`}
    }
    
    onPageClick(e){
       
        this.props.onPageChange(this.props.query,e.target.text );
    }
    
    
    renderPagination(count){
        let i=0;
         while(i<count){
         }

        return(
            <div>
                <ul class="pagination float-right">

                {/* <li class="page-item"><a class="page-link" href="">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li className="page-item"><a class="page-link" href="#">...</a> </li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
            </ul>
           </div>
        );
    }

    render()
    {   let index;
        var content=[];
      var noofpages= (Math.ceil(this.props.total_results/10)) ;
      
       //content.push('<div><ul className="pagination float-right">');

      for (index = 1; index <= (noofpages > 100 ? 100:noofpages) ; index ++) {
          
          content.push(this.generatePageLinks(index,index));
      }
        return(
        <div><ul className="pagination float-right">
        {content}
        </ul> </div>
        );
   
    }
    

}