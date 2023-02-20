import React from 'react'
import './temp.scss'
export class TemperatorInput extends React.Component {
  handleChange = (event) => {
    this.props.onTempChange(event.target.value)
  }

  render() {
    return (
      <div>
        <div className='text-input'>
          <input
            type='text'
            id='input1'
            placeholder='Hay nhap nhiet do'
            value={this.props.temperators}
            onChange={this.handleChange}
          />
          <label htmlFor='input1'>Enter temperature in {this.props.title}</label>
        </div>
      </div>
    )
  }
}

export default TemperatorInput
