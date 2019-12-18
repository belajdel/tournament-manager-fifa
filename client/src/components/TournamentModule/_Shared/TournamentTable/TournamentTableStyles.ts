import styled from 'styled-components';

/**
 * Table
 */
export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 100%;
`;

// All Rows
export const TableRow = styled.tr`
  border-bottom: 1px solid #CCC;
  cursor: pointer;

  &:hover {
    background: #F4F4F4;
  }
`;

// Header Row
export const TableHeaderRow = styled(TableRow)``;

// All [Header Columns]
export const Th = styled.th`
  background: #F4F4F4;
  color: #333;
  font-weight: bold;
  padding: 16px 10px;
  text-align: center;
`;

// Team [Header Column]
export const ThTeam = styled(Th)`
  flex: 1;
  text-align: left;
  width: 200px;
`;

// All Columns
export const Td = styled.td`
  padding: 16px;
`;

// Team Column
export const TdTeam = styled(Td)`
  text-align: left;
`;