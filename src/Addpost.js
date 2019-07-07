import React from "react";
class Add_post extends React.Component {
  constructor(props) {
    super(props);
    this.cake = props.name;
    this.state = { title: "" };
    this.state = { post: "",error:false};
  }
  handleChange = even => {
    this.setState({ title: even.target.value });
    if(this.state.title!==""){
      this.setState({
        error:false
      });
    }
  };
  enter=(e)=>{
    if(e.key==='Enter'){
      if(this.state.title===""){
        this.setState({
          error:true
        });
      }else{
      this.props.posts(this.state.title, this.state.post);
      this.setState({
        title: "",
        post:""
      });
    }
     
    }
  }
  handleChan = even => {
    this.setState({ post: even.target.value });
  };
  return_post = e => {
    if (this.state.title !== "") {
      this.props.posts(this.state.title, this.state.post);
    }else{
      this.setState({
        error:true
      });
    }
    this.setState({
      title: "",
      post:""
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row_style">
            <h4 className="text-center col-sm-12">Submit new post</h4>
            <div className="col-md-3   col-md-offset-4" />
            <div className="col-md-6   col-md-offset-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title"
                  onKeyDown={this.enter}
                />
              </div>
              <textarea
                type="text"
                className="form-control"
                cols="40"
                rows="6"
                value={this.state.post}
                onChange={this.handleChan}
                placeholder="What's on your mind?"
              />
              {this.state.error?<div className="small text-danger">No Title!</div>:""}
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary display-block"
                  onClick={this.return_post}
                >
                  Submit Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Add_post;
