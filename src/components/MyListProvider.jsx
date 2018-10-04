import React from 'react'

import { MyListContext } from './MyListContext'

export class MyListProvider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 9999999,
			myArray: [{
				id: 234343,
				title: 'Blair Witch',
				img: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_200,q_auto:best/thumbs/2709367.jpg'
			},
			{
				id: 234344,
				title: 'Crystal Lake',
				img: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_200,q_auto:best/thumbs/2941651.jpg'
			},
			{
				id: 234345,
				title: 'Circus of Fear',
				img: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_200,q_auto:best/thumbs/2941671.jpg'
			}]
		}
	}

	render() {
		return (
			<MyListContext.Provider value={{
				state: this.state,
				remove: () => {
					let newArray = this.state.myArray.slice()
					newArray.pop()
					this.setState({
						myArray: newArray
					})
				},
				get: () => this.setState({
					num: this.state.num + 1
				}),
				add: () => this.setState(prevState => ({
					myArray: [...prevState.myArray, {
						id: 234345,
						title: 'Circus of Fear',
						img: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_200,q_auto:best/thumbs/2941671.jpg'
					}]

				})),
				isInList: () => this.setState({
					num: this.state.num + 1
				})
			}}>
				{this.props.children}
			</MyListContext.Provider>
		)
	}
}



