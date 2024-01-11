import { Table, TableBody, TableCell,TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { useEffect, useState } from 'react';

import Template from "@/components/templates/Template";


const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('http://your-laravel-app/api/users')
          .then(response => response.json())
          .then(data => setUsers(data.users))
          .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
      <Template>
          <div className="p-2">
            <Table>
              <TableHead>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Username</TableHeadCell>
                <TableHeadCell>Phone</TableHeadCell>
                <TableHeadCell>Position</TableHeadCell>
                <TableHeadCell>Role</TableHeadCell>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell> 
                    <TableCell>{user.phone}</TableCell> 
                    <TableCell>{user.position}</TableCell> 
                    <TableCell>{user.role}</TableCell>   
                  </TableRow>
            ))}
              </TableBody>
            </Table>
          </div>
      </Template>
  );
}
 
export default Dashboard;
