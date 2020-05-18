import React,{Component} from 'react';

class NativeEventDemo extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  handleClick(e){
    console.log(e);
  }

  componentDidMount(){
    this.button.addEventListener('click',this.handleClick);
  }
  
  componentWillUnmount(){
    this.button.removeEventListener('click',this.handleClick);
  }

  render(){
    return(<button ref={(ref)=>this.button=ref}>test</button>);
  }
}

export default NativeEventDemo;