import React from 'react'
import Table from '../common/table/table'

const PlantTable = ({data: plant, onDelete, sortColumn, onSort}) => {
  const columns = [
    {path: 'siteCode', label: 'Site Code'},
    {path: 'projectPin', label: 'Project Pin'},
    {path: 'plantCode', label: 'Plant Code'},
    {path: 'name', label: 'Plant Name'},
    {path: 'internalRate', label: 'Internal Rate (£)'},
    {path: 'marketRate', label: 'Market Rate (£)'},
    {
      key: 'delete',
      content: item => (
        <button
          type="button"
          onClick={() => onDelete(item)}
          className="alert button small"
          style={{marginTop: 30, margin: 0}}
        >
          Delete
        </button>
      ),
    },
  ]

  return (
    <Table
      data={plant}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
      striped
    />
  )
}

export default PlantTable
