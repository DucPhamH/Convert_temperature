import React from 'react'
import Boling from './Boling'
import TemperatorInput from './TemperatorInput'

const tryConvert = (temperature, scaleinput) => {
  const input = Number(temperature)
  if (Number.isNaN(input) || temperature === '') {
    return ''
  }
  let output
  if (scaleinput === 'f') {
    output = (input - 32) / 1.8
  } else {
    output = input * 1.8 + 32
  }
  output = Math.round(output * 1000) / 1000
  return output
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      temperators: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    console.log(value)
    this.setState({
      temperators: value,
      scale: scale
    })
  }
  render() {
    const { scale, temperators } = this.state
    const celsius = scale === 'f' ? tryConvert(temperators, scale) : temperators
    const fahrenheit = scale === 'c' ? tryConvert(temperators, scale) : temperators
    return (
      <div>
        <TemperatorInput title='Celsius' temperators={celsius} onTempChange={this.handleChange('c')} />
        <TemperatorInput title='Fahrenheit' temperators={fahrenheit} onTempChange={this.handleChange('f')} />
        <div>
          <Boling celsius={celsius} />
        </div>
      </div>
    )
  }
}

export default Calculator
