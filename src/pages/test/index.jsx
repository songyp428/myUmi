import React, { Component } from 'react'
import { connect } from 'dva'
import {Button} from 'antd'

class TestComponent extends React.Component {
	constructor(props) {
	    super(props)
	}

	componentWillMount() {
	    console.log('componentWillMount')
	}

	componentDidMount() {
	    console.log('componentDidMount')
	}

	render() {
		let {
			dispatch,
	    	test: {
	    		count
	    	}
	    } = this.props

	    const handleChangeCount = () => {
			dispatch({
				type: 'test/updateState',
				payload: {
					count: count+1
				}
			})
		}

		return (
			<div style={{height: '100000px'}}>
				<p>{count}</p>
				<Button onClick={handleChangeCount}>change</Button>
			</div>
		)
	}
}

const mapStateToProps = ({ test }) => { 
  return { test }
}

export default connect(mapStateToProps)(TestComponent)