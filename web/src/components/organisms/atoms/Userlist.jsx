import { Table, TableBody, TableCell,TableHead, TableHeadCell, TableRow } from 'flowbite-react';

const users = [
  { id: 1, name: 'John Doe'},
  { id: 2, name: 'Jane Smith'},
  { id: 3, name: 'Cardo Dalisay'},
];

const UserList = () => {
  return (
    <div className="p-2">

      <Table>
        <TableHead>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
