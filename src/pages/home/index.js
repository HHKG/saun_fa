import React, { Component } from 'react';
import Tabs from '../../components/tabs';
import Button from '../account/index';
import Test from '../test/index';
import NativeEventDemo from '../nativeEventDemo/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  //  ceshi=(event)=>{
  //    console.log(event);
  //  }
  ceshi(event) {
    console.log(event.currentTarget.getAttribute('data-ddd'))
  }
  render() {//核心组件输出方法
    console.log('this.props:', this.props)
    return (
      <React.Fragment>
        <div data-ddd="ddd" onClick={this.ceshi} style={{ cursor: 'pointer' }}>
          <Tabs />
          <Button></Button>

        </div>
        <Test></Test>
        <NativeEventDemo></NativeEventDemo>
      </React.Fragment>
    );
  }

}
export default Home;