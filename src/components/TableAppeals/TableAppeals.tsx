'use client';

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';

import TablePagination from '@/components/TablePagination';
import type { IDataAppeal } from '@/types/IDataAppeal';

type IAppealsTableProps = {
  dataAppend: Array<IDataAppeal>;
};

const ITEMS_APPEAL = 3;

export const TableAppeals = ({ dataAppend }: IAppealsTableProps) => {
  const [counter, setCounter] = useState(1);

  const startIndex = (counter - 1) * ITEMS_APPEAL;
  const endIndex = startIndex + ITEMS_APPEAL;

  const pageCount = Math.ceil(dataAppend.length / ITEMS_APPEAL);
  const currentItems = dataAppend.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCounter(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}>Тема</TableCell>
              <TableCell align="left">Номер</TableCell>
              <TableCell align="left">Дата создания</TableCell>
              <TableCell align="left">Дата изменения</TableCell>
              <TableCell align="left">Крайний срок</TableCell>
              <TableCell align="left">Статус</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentItems.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell colSpan={4} component="th" scope="row">
                  <Link href={`/appeals/${row.id}`}>
                    <Stack direction="row" gap={1}>
                      {row.theme}
                      {row.response ? (
                        <ReportProblemIcon color="error" fontSize="small" />
                      ) : null}
                    </Stack>
                  </Link>
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">
                  {new Date(row.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="left">
                  {new Date(row.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="left">
                  {new Date(row.deadline).toLocaleDateString()}
                </TableCell>
                <TableCell align="left">{row.condition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        count={pageCount}
        page={counter}
        onChangePage={handlePageChange}
      />
    </>
  );
};
