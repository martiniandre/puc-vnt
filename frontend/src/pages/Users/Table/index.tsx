import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { User } from "../../../types/user";

type TableProps = {
  users: User[];
};

export const UserTable = ({ users }: TableProps) => {
    console.log(users)
  return (
    <TableContainer component={Paper} sx={{marginTop: 20}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {user?.firstName}
              </TableCell>
              <TableCell align="right">{user?.lastName}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
