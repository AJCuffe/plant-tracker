import React from 'react'
import Table from '../common/tables/table'

const UsersTable = ({data: users, sortColumn, onSort}) => {
  const columns = [
    {path: 'username', label: 'Username'},
    {path: 'email', label: 'Email'},
    {path: 'designation', label: 'Designaton'},
    {path: 'role', label: 'Role'},
  ]

  return (
    <Table
      data={users}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
      striped
    />
  )
}

export default UsersTable
