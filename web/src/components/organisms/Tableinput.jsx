import { Table } from 'flowbite-react';
import { McLaren } from 'next/font/google';
import { Input } from 'postcss';

const Tableinput = () => {
    return (
        <div >
            
                <Table striped>
                <Table.Head>
                <Table.HeadCell>Order</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>

                </Table.Head>
                </Table>

            
        </div>

        
  
    )
 }
 export default Tableinput
