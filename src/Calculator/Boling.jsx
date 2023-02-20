import React from 'react'
import logo from '../asset/amnuoc.png'
export class Boling extends React.Component {
  render() {
    return (
      <div className='boling'>
        {this.props.celsius >= 100 ? (
          <div className='water_boil'>
            <div>The water would boild</div>
            <div>
              <img className='img1' src={logo} alt='' />
            </div>
          </div>
        ) : (
          'The water would not boild'
        )}
      </div>
    )
  }
}

export default Boling
