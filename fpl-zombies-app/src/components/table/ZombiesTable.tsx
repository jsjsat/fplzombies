import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GameweekRanking } from '../../model/model';

export const ZombiesTable: React.FC<GameweekRanking> = ({ ranking }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Rank&nbsp;(overall)</TableCell>
            <TableCell align="right">Points&nbsp;(overall)</TableCell>
            <TableCell align="right">Rank&nbsp;(GW)</TableCell>
            <TableCell align="right">Points&nbsp;(GW)</TableCell>
            <TableCell align="right">Captain</TableCell>
            <TableCell align="right">ViceCaptain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ranking.map((row) => (
            <TableRow
              key={row.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <a href={"https://fantasy.premierleague.com/entry/"+ row.userid + "/history"} target="_blank">{row.username}</a>
              </TableCell>
              <TableCell align="right">{row.overallrank}</TableCell>
              <TableCell align="right">{row.overallpoints}</TableCell>
              <TableCell align="right">{row.gameweekrank}</TableCell>
              <TableCell align="right">{row.gameweekpoints}</TableCell>
              <TableCell align="right">{row.captain}</TableCell>
              <TableCell align="right">{row.vicecaptain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}