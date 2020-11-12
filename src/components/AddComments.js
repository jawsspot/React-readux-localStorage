import React from "react";
import { connect } from "react-redux";
import {createComments} from "../redux/actions";

class addComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", comments: "", validate: ""};
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { name, comments } = this.state;
    
     if (!name.trim() || !comments.trim()) {
       return this.setState({ validate: "Не введен коментарий или имя" });
     }
    
    const newPost = {
      name,
      comments,
      date: new Date().toLocaleTimeString(),
      id: Date.now(),
    };
    console.log(comments);

    this.props.createComments(newPost);
    this.setState({ name: "", comments: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Имя"
          onChange={(e) => {
            this.setState({ name: e.target.value, validate:"" });
          }}
        ></input>
        <input
          type="text"
          name="comments"
          placeholder="Ваш коментарий"
          value={this.state.comments}
          onChange={(e) => {
            this.setState({ comments: e.target.value, validate: "" });
          }}
        ></input>
        <button type="submit">Отправить</button>

        <p>{this.state.validate}</p>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createComments,
};

export default connect(null, mapDispatchToProps)(addComment);
