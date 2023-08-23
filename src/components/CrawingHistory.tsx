import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  time: string,
  state: string,
  lastLog: string,
  protein: number,
) {
  return { name, time, state, lastLog, protein };
}

const rows = [
  createData('crawler.py', "2023.8.23 4:00", "等待完成", "crawler.py: start crawling", 4.0),
  createData('crawler.py', "2023.8.23 4:00", "爬取成功", "successs", 4.3),
  createData('crawler.py', "2023.8.23 4:00", "爬取成功", "successs", 6.0),
  createData('crawler.py', "2023.8.23 4:00", "爬取成功", "successs", 4.3),
  createData('crawler.py', "2023.8.23 4:00", "爬取失败", "crawler.py: Indentation Error", 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>爬虫</TableCell>
            <TableCell align="right">时间</TableCell>
            <TableCell align="right">状态</TableCell>
            <TableCell align="right">最后一条log</TableCell>
            <TableCell align="right">详情</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.lastLog}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
