import React, {PropTypes, Component,PureComponent} from 'react';

class App2 extends Component {
    constructor(props){
        super(props);
        this.state={
            b:22
        }
    }

    shouldComponentUpdate(){
        const {b} = this.state;
        this.setState({
            b:b+1
        })
    }

    hh = () => {
        alert(999);
    }

    render() {
        const {b} = this.state;
        return (
            <div>
                {b}
                {/* <SmallButton hh={this.hh}/> */}
            </div>
        );
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            a:22
        }
    }
    change = () => {
        //const {a} = this.state;
        this.setState({
            a:new Date()
        });
    }
    render(){
        const {a} = this.state;
        return(
            <App2 change={this.change} a={a}/>
        )
    }
}

export default App;