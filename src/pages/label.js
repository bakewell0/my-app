import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

@connect(
  state=>({abc:state.music}),
)

class Label extends React.Component {
    constructor (props) {
        super(props)
    }

    ccc = () => {
      const { dispatch } = this.props;
      dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:2}})
    }

    render () {
        return (
            <div onClick={this.ccc}>
                {this.props.abc}
            </div>   
        )
    }
}

export default Label;

// export default connect(function(state){return {active:state.music}})(Label);