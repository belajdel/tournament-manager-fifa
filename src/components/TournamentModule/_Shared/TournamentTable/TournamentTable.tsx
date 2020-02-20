import React from 'react';

/**
 * Styles
 */
import {
  Table,
  TableRow,
  Th,
  Td,
  TableHeaderRow,
  ThTeam,
  TdTeam,
} from './TournamentTableStyles';

interface Team {
  team: string;
  gamesPlayed: number;
  wins: number;
  ties: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

interface TournamentTableProps {
  teams: Array<Team>;
}

const GenerateTeamRows = (teams: Array<Team>) => {
  const TeamsList = teams.map((t: Team) => (
    <TableRow>
      <TdTeam>{t.team}</TdTeam>
      <Td>{t.gamesPlayed}</Td>
      <Td>{t.wins}</Td>
      <Td>{t.ties}</Td>
      <Td>{t.losses}</Td>
      <Td>{t.points}</Td>
      <Td>{t.goalsFor}</Td>
      <Td>{t.goalsAgainst}</Td>
    </TableRow>
  ));
};

// props: TournamentTableProps
const TournamentTable = () => (
  <Table>
    <TableHeaderRow>
      <ThTeam>Team</ThTeam>
      <Th>GP</Th>
      <Th>W</Th>
      <Th>T</Th>
      <Th>L</Th>
      <Th>PTS</Th>
      <Th>GF</Th>
      <Th>GA</Th>
    </TableHeaderRow>
    <TableRow>
      <TdTeam>Eduardo</TdTeam>
      <Td>10</Td>
      <Td>1</Td>
      <Td>2</Td>
      <Td>100</Td>
      <Td>100</Td>
      <Td>30</Td>
      <Td>10</Td>
    </TableRow>
    <TableRow>
      <TdTeam>Eduardo</TdTeam>
      <Td>10</Td>
      <Td>1</Td>
      <Td>1</Td>
      <Td>2</Td>
      <Td>100</Td>
      <Td>30</Td>
      <Td>10</Td>
    </TableRow>
    <TableRow>
      <TdTeam>Eduardo</TdTeam>
      <Td>10</Td>
      <Td>1</Td>
      <Td>2</Td>
      <Td>2</Td>
      <Td>100</Td>
      <Td>30</Td>
      <Td>10</Td>
    </TableRow>
  </Table>
);

export default TournamentTable;