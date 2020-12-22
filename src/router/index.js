import React from 'react'  
import {BrowserRouter, Route} from 'react-router-dom';
import demo from '../pages/demo' 
import Table from '../pages/table' 
import Label from '../pages/label' 
import YY from '../pages/yy';

export default class RouteMap extends React.Component {  
    updateHandle () {  
        console.log('每次router变化之后都会触发')  
    }  
    render () {  
        return (  
            <BrowserRouter> 
            	<div>
            		<Route path="/" exact component={demo}/>
	                <Route path="/table" exact component={Table}/>
	                <Route path="/label" component={Label} />
                    <Route path="/yy" component={YY} />
                </div>
        	</BrowserRouter>  
        )  
    }  
}  