import React, {Component} from 'react'
import {getPlant} from './services/fakePlantService'
import PlantTable from './tables/plantTable'
import _ from 'lodash'

class Plant extends Component {
  state = {
    plantItems: [],
    sortColumn: {path: 'code', order: 'asc'},
  }
  componentDidMount() {
    this.setState({plantItems: getPlant()})
  }

  handleDelete = item => {
    const plantItems = this.state.plantItems.filter(i => i._id !== item._id)
    this.setState({plantItems})
  }

  handleSort = sortColumn => {
    this.setState({sortColumn})
  }

  getSortedData = () => {
    const {sortColumn, plantItems: allPlant} = this.state
    const filtered = allPlant
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    return {data: sorted}
  }

  render() {
    const {data} = this.getSortedData()
    return (
      <React.Fragment>
        <div className="grid-x" style={{marginTop: 50}}>
          <div className="cell small-1" />
          <div className="cell small-10">
            <PlantTable
              data={data}
              sortColumn={this.state.sortColumn}
              onSort={sortColumn => this.handleSort(sortColumn)}
              onDelete={item => this.handleDelete(item)}
            />
          </div>
          <div className="cell small-1" />
        </div>
      </React.Fragment>
    )
  }
}

export default Plant
