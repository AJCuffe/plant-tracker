import React, {Component} from 'react'
import NavBar from './common/navigation/navBar'
import PlantList from './pages/plantList'

// import Users from './users'

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <PlantList />
      </React.Fragment>
    )
  }
}

export default App
