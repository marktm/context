import React from 'react'

import { MyFooContext } from './MyFooContext'

export class MyFooProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: 'bob',
      age: 99
    }

    this.changeName = this.changeName.bind(this)
  }

  changeName(value) {
    let newName = Object.assign({},this.state, {name: 'mark'})
    this.setState(newName)
}

  render() {
    return (
      <MyFooContext.Provider value={{
        state: this.state,
        changeName: this.changeName
      }}>
        {this.props.children}
      </MyFooContext.Provider>
    )
  }
}



