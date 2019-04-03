import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({
  columns,
  data,
  hover = false,
  striped = false,
  sortColumn,
  onSort,
}) => {
  let style = striped === true ? 'striped' : 'unstriped'
  style += hover === true ? ' hover' : ''

  return (
    <table className={style}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  )
}

export default Table
