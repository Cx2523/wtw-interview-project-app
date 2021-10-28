import React from 'react'
import styled from 'styled-components';
import { overviewTableColumnConfig } from './OverviewTableColumnConfig';

const StyledTableRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding: 0 0 10px 10px;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor}
`;

const StyledTableCellDiv = styled.div`
  width: ${props => props.width}px;
  min-width:${props => props.width}px;
  margin-top: 12px;
  margin-right: 15px;
`;

const StyledTableHeaderDiv = styled(StyledTableRowDiv)`
  border-bottom: 1px solid black;
  font-weight: bold;
  padding: 0 0 10px 10px;
`;

async function fetchAgentData() {
  return await fetch('/Agent');
}

function Row({ rowNumber, rowData, columnConfig, hasAlternatingRowColors }) {
  return (
    <StyledTableRowDiv backgroundColor={hasAlternatingRowColors && rowNumber % 2 === 0 ? 'lightgray' : 'none'}>
      {
        columnConfig.map((c, i) =>
          <StyledTableCellDiv key={i} width={c.width}>
            {c.cellRenderer(rowData)}
          </StyledTableCellDiv>
        )}
    </StyledTableRowDiv>
  );
}

function HeaderRow({ data, columnConfig, idKey, hasAlternatingRowColors }) {
  return (
    <StyledTableHeaderDiv>
      {
        columnConfig.map((c, i) =>
          <StyledTableCellDiv key={i} width={c.width}>
            {c.label}
          </StyledTableCellDiv>
        )}
    </StyledTableHeaderDiv>
  );
}

function Table({ data, columnConfig, idKey, hasAlternatingRowColors }) {
  return (
    <>
      <HeaderRow columnConfig={columnConfig} />
      {data.map((d, i) =>
        <Row
          key={i}
          rowNumber={i + 1}
          rowData={d}
          columnConfig={columnConfig}
          hasAlternatingRowColors={hasAlternatingRowColors}
        />)}
    </>
  );
}

function OverviewPage() {
  const [persons, setPersons] = React.useState(null);

  React.useEffect(() => {
    async function getPersonData() {
      const response = await fetchAgentData()
      const data = await response.json();
      setPersons(data);
    }
    getPersonData();
  }, []);

  if (!persons) return null;
  return (
    <Table
      data={persons}
      columnConfig={overviewTableColumnConfig}
      idKey="agentId"
      hasAlternatingRowColors
    />
  );
}

export default OverviewPage;
