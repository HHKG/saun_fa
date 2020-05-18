import React,{Component} from 'react';

class Button extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  static defaultProps={
    color:'blue',
    text:'Comfirm'
  }
  render(){
    const {color, text} =this.props;
    return(
        <button className={`btn btn-${color}`}>
          <em>{text}</em>
        </button>
    );
  }
}

export default Button;