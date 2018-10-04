import React from 'react';

import { MyListContext } from './MyListContext'

class MyComponent extends React.Component {
	render() {
		const videos = this.props.context.state.myArray.map((item, index) => {
			return <div key={index}>{item.title} - <img alt={item.title} src={item.img} /></div>
		})
		return (
			<React.Fragment>
				{this.props.context.state.num}{videos}
				<button onClick={this.props.context.add}>1++</button>
				<button onClick={this.props.context.remove}>remove</button>
			</React.Fragment>
		)
	}
}

export default props => (
	<MyListContext.Consumer>
		{context => <MyMultiComponent {...props} context={context} />}
	</MyListContext.Consumer>

)

