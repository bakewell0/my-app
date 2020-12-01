import React, { PropTypes, Component, PureComponent } from "react";
import { createStore } from "./myRedux";

const initMilkState = {
  milk: 0,
};
function milkReducer(state = initMilkState, action) {
  switch (action.type) {
    case "PUT_MILK":
      return { ...state, milk: state.milk + action.count };
    case "TAKE_MILK":
      return { ...state, milk: state.milk - action.count };
    default:
      return state;
  }
}

const initRiceState = {
  rice: 0,
};
function riceReducer(state = initRiceState, action) {
  switch (action.type) {
    case "PUT_RICE":
      return { ...state, rice: state.rice + action.count };
    case "TAKE_RICE":
      return { ...state, rice: state.rice - action.count };
    default:
      return state;
  }
}

// 使用combineReducers组合两个reducer
const reducer = combineReducers({
  milkState: milkReducer,
  riceState: riceReducer,
});

let store = createStore(reducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PUT_MILK", count: 1 }); // milk: 1
store.dispatch({ type: "PUT_MILK", count: 1 }); // milk: 2
store.dispatch({ type: "TAKE_MILK", count: 1 });

// 操作大米的action
store.dispatch({ type: "PUT_RICE", count: 1 }); // rice: 1
store.dispatch({ type: "PUT_RICE", count: 1 }); // rice: 2
store.dispatch({ type: "TAKE_RICE", count: 1 }); // rice: 1

function combineReducers(reducerMap) {
  const reducerKeys = Object.keys(reducerMap); // 先把参数里面所有的键值拿出来

  // 返回值是一个普通结构的reducer函数
  const reducer = (state = {}, action) => {
    const newState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      // reducerMap里面每个键的值都是一个reducer，我们把它拿出来运行下就可以得到对应键新的state值
      // 然后将所有reducer返回的state按照参数里面的key组装好
      // 最后再返回组装好的newState就行
      const key = reducerKeys[i];
      const currentReducer = reducerMap[key];
      const prevState = state[key];
      newState[key] = currentReducer(prevState, action);
    }

    return newState;
  };

  return reducer;
}

function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    };
  };
}

function applyMiddleware(middleware) {
  // applyMiddleware的返回值应该是一个enhancer
  // 按照我们前面说的enhancer的参数是createStore
  function enhancer(createStore) {
    // enhancer应该返回一个新的createStore
    function newCreateStore(reducer) {
        const store = createStore(reducer);
        
        // 将middleware拿过来执行下，传入store
        // 得到第一层函数
        const func = middleware(store);
        
        // 解构出原始的dispatch
        const { dispatch } = store;
        
        // 将原始的dispatch函数传给func执行
        // 得到增强版的dispatch
        const newDispatch = func(dispatch);
        
        // 返回的时候用增强版的newDispatch替换原始的dispatch
        return {...store, dispatch: newDispatch}
      }
      
      return newCreateStore;
  }

  return enhancer;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 22,
    };
  }
  change = () => {
    this.setState({
      a: new Date(),
    });
  };
  render() {
    const { a } = this.state;
    return <div>7777</div>;
  }
}

export default App;
