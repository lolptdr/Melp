import React, { PropTypes } from 'react'
import { Router } from 'react-router'

// Alternative: const App = React.createClass({...
class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  // class getter
  get content () {
    return (<Router
      routes={this.props.routes}
      history={this.props.history} />)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}


// module.exports = App;
export default App;
