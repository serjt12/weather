import React, {Component} from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends Component {
  state = {
    text: 'Loading'
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  componentWillMount() {
    const stopper = `${this.props.text}...`
    this.setState({text: stopper})
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(()=> {
          return {text: this.props.text}
        })
      } else {
        this.setState(prevState => ({text: `${prevState.text}.`}))
      }
    }, this.props.speed)
  }
  render() {
    return (<p style={styles.content}>
      {this.state.text}
    </p>)
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
