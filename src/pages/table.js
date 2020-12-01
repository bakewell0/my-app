import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function WrapperHello(Comp) {
    class WrapComp extends React.Component {
      render() {
        return (
          <div>
            <p>这是 HOC 高阶组件特有的元素</p>
            <Comp {...this.props}></Comp>
          </div>
        )
      }
    }
    return WrapComp
  }
  
  @WrapperHello
  class TabbleDemo1 extends React.Component {
    render() {
      return <h2>Hello, I love React&Redux</h2>
    }
  }

  export default TabbleDemo1;