import { createVNode } from "./mvdom";
//生成虚拟dom
function createElement(type, props, ...children) {
  props.children = children;
  delete props.__source;
  delete props.__self;
  //判断标签类型
  let vtype;
  if (typeof type === "string") {
    vtype = 1;
  } else if (typeof type === "function") {
  //isClassComponent继承的静态属性，用来判断组件类型
    if (type.isClassComponent) {
      vtype = 2;
    } else {
      vtype = 3;
    }
  }
  console.log(vtype, type, props);
  return createVNode(vtype, type, props);
}

export default { createElement };

export class Component {
  //区分组件是function还是class
  static isClassComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  setState() {}
}