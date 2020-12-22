import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook 
 } = require("tapable");

 const hook = new SyncHook(["arg1", "arg2", "arg3"]);

console.log("hookhookhook",hook);

 class Car {
    constructor() {
        this.hooks = {
            accelerate: new SyncHook(["newSpeed"]),
            brake: new SyncHook(),
            calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
        };
    }
    render(){
        return (<div>77777</div>)
    }
 
    /* ... */
}

// const myCar = new Car();
 
// myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));

let ahook  = new SyncHook() // 通过new 创建一个钩子的实例
ahook.tap('name', () => {console.log('xxx')}) // 通过tap来挂载一个函数到钩子实例上
ahook.call() //


export default Car;