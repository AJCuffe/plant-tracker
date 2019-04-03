import React from 'react'
import Table from '../common/tables/table'

const PlantTable = ({data: plant, onDelete, sortColumn, onSort}) => {
  const columns = [
    {path: 'siteCode', width: 120, label: 'Site Ref'},
    {path: 'projectPin', width: 120, label: 'Project Pin'},
    {path: 'plantCode', width: 120, label: 'Plant Code'},
    {path: 'name', label: 'Name / Description'},
    {path: 'internalRate', width: 120, label: 'Int Rate (£)'},
    {path: 'marketRate', width: 120, label: 'Ext Rate (£)'},
    {
      key: 'edit',
      width: 70,
      content: item => (
        <button
          type="button"
          onClick={() => onDelete(item)}
          className="button small"
          style={{marginTop: 30, margin: 0}}
        >
          Edit
        </button>
      ),
    },
    {
      key: 'delete',
      width: 60,
      content: item => (
        <button
          type="button"
          onClick={() => onDelete(item)}
          className="alert button small"
          style={{marginTop: 30, margin: 0}}
        >
          X
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
