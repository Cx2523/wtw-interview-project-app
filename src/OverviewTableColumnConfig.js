import React from 'react';

import EditButton from './EditButton';

export const overviewTableColumnConfig = [
  {
    label: 'Person Id',
    dataKey: 'personId',
    width: 100,
    cellRenderer: (rowData) => rowData.personId,
  },
  {
    label: 'First Name',
    dataKey: 'firstName',
    width: 100,
    cellRenderer: (rowData) => rowData.firstName,
  },
  {
    label: 'Last Name',
    dataKey: 'lastName',
    width: 100,
    cellRenderer: (rowData) => rowData.lastName,
  },
  {
    label: 'Status',
    dataKey: 'status',
    width: 100,
    cellRenderer: (rowData) => rowData.status,
  },
  {
    label: '',
    dataKey: 'personId',
    width: 100,
    cellRenderer: (rowData) => (
      <EditButton personId={rowData.personId} />
    ),
  },
];
