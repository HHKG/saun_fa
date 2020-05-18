import React,{Component} from 'react';
import './tabs.scss';
import $ from 'jquery';
import EventEmitter from 'events';

class Tabs extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <React.Fragment>
        <div id="tab-demo"> 
          <div className="tabs-bar" role="tablist">
            <ul className="tabs-nav">
              <li className="tabs-tab" role="tab">tab1</li>
              <li className="tabs-tab" role="tab">tab2</li>
              <li className="tabs-tab" role="tab">tab3</li>
            </ul>
          </div>
          <div className="tabs-conent" >
            {/* panel:嵌条 */}
            <div className="tabs-panel" role="tabpanel">
                第一个tab的内容
            </div>
            <div className="tabs-panel" role="tabpanel">
                第二个tab的内容
            </div>
            <div className="tabs-panel" role="tabpanel">
                第三个tab的内容
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}
export default Tabs