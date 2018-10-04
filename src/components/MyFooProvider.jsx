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
  }

  render() {
    return (
      <MyFooContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </MyFooContext.Provider>
    )
  }
}



