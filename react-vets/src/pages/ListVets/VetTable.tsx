import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Vet } from '../../model/Vet';

interface VetTableProps {
  vets: Readonly<Vet[]>;
}

const EMPTY = 'N/A';
function VetTable(props: VetTableProps) {
  const { vets } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Specialties</TableCell>
          </TableRow>
        </TableHead>
        {vets && (
          <TableBody>
            {vets.map((vet) => (
              <TableRow key={vet.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" align="left">
                  {vet.id}
                </TableCell>
                <TableCell component="th" align="left">
                  {vet.lastName || EMPTY} {vet.firstName || EMPTY}
                </TableCell>
                <TableCell component="th" scope="row">
                  {vet.specialties ? vet.specialties.map((s) => s.name).join(',') : EMPTY}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default VetTable;
