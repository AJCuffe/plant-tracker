import React, {Component} from 'react'
import _ from 'lodash'
import {getUsers} from '../services/fakeUserService'
import UsersTable from '../tables/usersTable'

class Users extends Component {
  state = {
    users: [],
    sortColumn: {path: 'username', order: 'asc'},
  }

  componentDidMount() {
    this.setState({users: getUsers()})
  }

  handleDelete = user => {
    const users = this.state.users.filter(u => u._id !== user._id)
    this.setState({users})
  }

  handleSort = sortColumn => {
    this.setState({sortColumn})
  }

  getSortedData = () => {
    const {sortColumn, users: allUsers} = this.state
    const filtered = allUsers
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
            <UsersTable
              data={data}
              sortColumn={this.state.sortColumn}
              onSort={sortColumn => this.handleSort(sortColumn)}
            />
          </div>
          <div className="cell small-1" />
        </div>
      </React.Fragment>
    )
  }
}

export default Users
