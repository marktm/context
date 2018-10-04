import React from 'react';

import { MyListContext } from './MyListContext'
import { MyFooContext } from './MyFooContext'

class MyMultiComponent extends React.Component {
	componentDidMount() {
		console.log(this.props.mylist.state.num)
	}

	render() {
		const videos = this.props.mylist.state.myArray.map((item, index) => {
			return <div key={index}>{item.title} - <img alt={item.title} src={item.img} /></div>
		})
		return (
			<React.Fragment>
				{videos}
				<button onClick={this.props.mylist.add}>1++</button>
				<button onClick={this.props.mylist.remove}>remove</button>
			</React.Fragment>
		)
	}
}

export default props => (
	<MyFooContext.Consumer>
		{foo => (
			<MyListContext.Consumer>
				{mylist => <MyMultiComponent {...props} mylist={mylist} foo={foo} />}
			</MyListContext.Consumer>
		)}
	</MyFooContext.Consumer>

)

