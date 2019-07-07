import React from "react";
import Add_post from "./Addpost";
import Post from "./Posts";
import Navbar from "./Navbar";
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={tcop: []}
  }
  add = (x, y) => {
    let d=new Date();
    const id = Date.parse(d);
    const record = { id: id, title: x, post: y, likes:0, comments:[],toggle:true};
    if(x!==undefined ){
      this.setState({
        tcop: [record,...this.state.tcop]
      });
    }
    axios.post(`http://localhost:3000/posts`,record)
    .then(response=>{
     
    })
    .catch(err=>{
      console.log(err)
    })
  };
  add_likes=x=>{
    let r=this.state.tcop.map(o => {
      if(o.id === x)
      {
        o.likes=o.likes+1;
        
      }
      return o;
    });
    this.setState({
      tcop: [...r]
    });
    let k=this.state.tcop.map(o => {
      if(o.id===x)
      return o;
    });
    
    axios.put(`http://localhost:3000/posts/${x}`,k[0])
    .then(response=>{
      
    })
    .catch(err=>{
      console.log(err)
    })
  }
  add_comment=(x,y)=>{
    let r=this.state.tcop.map(o => {
      if(o.id === y)
      {
        o.comments=[x,...o.comments];
      }
      return o;
    });
    this.setState({
      tcop: [...r]
    });
  }
  toggle = (v,y) =>{
    let r=this.state.tcop.map(o => {
      if(o.id === y)
      {
        o.toggle=v
      }
      return o;
    });
    this.setState({
      tcop: [...r]
    })
  }
  delete_post=x=>{
    let r = this.state.tcop.filter(item => {
      return item.id !== x;
    }); 
    this.setState({
      tcop: [...r]
    });
  }
  componentDidMount() {
    axios.get('http://localhost:3000/posts')
    .then(a=>{
      const persons = a.data;
        this.setState({tcop: persons });
    })
}
  render() {
    return (
      <div>
        <Navbar />
          <Add_post name="Share here" posts={this.add} />
          <div>
        <div className="container">
          <div className="col-md-1" />
          <div className="col-md-11">
            <div className="row">
              <div className="col-sm-12">
                <h1>
                  <i className="glyphicon glyphicon-asterisk" /> posts
                </h1>
                <p className="page-header lead">Blog list example for Bootstrap</p>{" "}
              </div>
            </div>
            {this.state.tcop.map(i => {
              return <Post post={i} toggle={this.toggle} likes={this.add_likes} addcom={this.add_comment} del={this.delete_post}/>;
            })}
            
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;