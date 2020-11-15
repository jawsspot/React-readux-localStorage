import React from "react";
import { connect } from "react-redux";
import {deleteComments} from '../redux/actions'



class Ul extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){

   if (!this.props.newPosts.length) return <p>Нет новых комментариев</p>;
   return this.props.newPosts.map((li, index) => {
     return (
       <li key={index}>
         <div>
           <h2 className="name">{li.name}</h2>
           <p className="date">{li.date}</p>
         </div>
         <p className="comments">{li.comments}</p>
         <button onClick={(e) => this.props.deleteComments(index)}>Удалить</button>
       </li>
     );
   });
  }

}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    newPosts: state
  };
};

const mapDispatchToProps = {
  deleteComments
};


export default connect(mapStateToProps, mapDispatchToProps)(Ul);
