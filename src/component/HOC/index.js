import React from "react";
class CommentList extends React.PureComponent{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments:[]
    }
  }
  render(){

  }
}



function widthSubscription(WrappedComponent,selectData){
 return class extends React.Component{

   render(){
     return <WrappedComponent data={this.state.data} {...this.props}/>
   }
 }
}