import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.mmmm)
    return;
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  }
  render() {
    return (
      <div>
        <input type="text" ref={(red)=>this.mmmm=red}></input>
        <div ref={(ref)=>this.test=ref} className="mmm">你你sad</div>
        <input type="button" value="Focus the text input" onClick={this.handleClick}></input>
      </div>
    );
  }
}

export default Test;