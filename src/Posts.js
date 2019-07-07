import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      j: false,
      comment:""
  }
  }
  cclick = () => {
    this.props.addcom(this.state.comment,this.props.post.id);
  }
  comchange = even => {
    this.setState({ comment: even.target.value });
  }
  likes=()=>{
    this.props.likes(this.props.post.id);
  }
  delete=()=>{
    this.props.del(this.props.post.id);
  }
  addcom=e=>{
    if(e.key==='Enter'){
      this.props.addcom(this.state.comment,this.props.post.id)
      this.setState({
        comment:""
      })
    }
  }
  showcomments=()=>{
    
    if(this.state.j){
      this.setState({
        j: false
    })
    }
    else{
      this.setState({
        j: true
    })
    }
   
    this.props.toggle(this.state.j,this.props.post.id)
  }
  render() {
return (
      <div className="row shadow p-3 mb-5 bg-white rounded">
        <div className="col-sm-12">
          <h4>{this.props.post.title}</h4>
          
          <hr />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm btn-info" onClick={this.delete}>Delete</button> 
        </div>
        <div className="col-sm-10">
          <p>{this.props.post.post}</p>
         
          <div className="row">
        <div className="col-lg-2">
          <button className="btn btn-sm btn-info" onClick={this.likes}>
            {this.props.post.likes} LIKES
          </button>
        </div>


            <div className="col-lg-10">
        <div className="row">
          <div className="col-lg-3">Comments</div>
          <div className="col-lg-6 form-group w-100">
            <input className="col-*-* form-control" onChange={this.comchange} value={this.state.comment} onKeyDown={this.addcom} placeholder="comment here"/>
          </div>
          <div className="col-lg-3">
                    <button className="btn btn-default btn-sm" onClick={this.showcomments}>View Comments</button>
                </div>
        </div>
      </div>

      <div>{this.props.post.toggle?
      <div>
      {this.props.post.comments.map(i => {
          return <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
          {i}
      </div>
        })}
      </div>:""}</div>
      </div>


        </div>
      </div>
    );
  }
}
export default Post;