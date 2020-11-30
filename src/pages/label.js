import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

@connect(
  //state => state.music
  state=>({abc:state.music}),
)

class Label extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                {this.props.abc}
            </div>   
        )
    }
}

export default Label;

// export default connect(function(state){return {active:state.music}})(Label);