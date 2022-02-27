import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { User } from "../../../types/user";

type TableProps = {
  users: User[];
};

export const UserTable = ({ users }: TableProps) => {

  if(users.length === 0){
    return <h1>Nenhum usuario cadastrado</h1>
  }


  return (
    <TableContainer component={Paper} sx={{marginTop: 20}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
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
