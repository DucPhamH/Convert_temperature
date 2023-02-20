import React from 'react'

export class Boling extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='boling'>{this.props.celsius >= 100 ? 'The water would boild' : 'The water would not boild'}</div>
    )
  }
}

export default Boling
