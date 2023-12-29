import Tableinput from '@/components/organisms/Tableinput';
import ButtonInput from '@/components/organisms/buttonInput';


import { Button, Table } from 'flowbite-react';
import React from 'react';


const orderPagelist = () => {
  return (
    <div className='bg-white min-h-screen p-4 '>
      
      <div className="overflow-x-auto">
      <Table striped>
       <Tableinput>
        </Tableinput>

      <Table>

        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'#1'}
            </Table.Cell>
            <Table.Cell>January 26, 2023</Table.Cell>
            <Table.Cell>Processing</Table.Cell>
            <Table.Cell>199 for 1 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'#2'}
            </Table.Cell>
            <Table.Cell>Febuary 14, 2023</Table.Cell>
            <Table.Cell>Processing</Table.Cell>
            <Table.Cell>6000 for 10 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'#3'}</Table.Cell>
            <Table.Cell>May 12, 2023</Table.Cell>
            <Table.Cell>Processing</Table.Cell>
            <Table.Cell>399 for 1 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'#4'}
            </Table.Cell>
            <Table.Cell>November 12, 2023</Table.Cell>
            <Table.Cell>Processing</Table.Cell>
            <Table.Cell>200 for 1 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'#5'}</Table.Cell>
            <Table.Cell>December 25, 2023</Table.Cell>
            <Table.Cell>Processing</Table.Cell>
            <Table.Cell>4500 for 6 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'#6'}</Table.Cell>
            <Table.Cell>April 6, 2024</Table.Cell>
            <Table.Cell>Complete</Table.Cell>
            <Table.Cell>2500 for 2 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'#7'}</Table.Cell>
            <Table.Cell>june 5, 2024</Table.Cell>
            <Table.Cell>Complete</Table.Cell>
            <Table.Cell>10,000 for 15 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{'#8'}</Table.Cell>
            <Table.Cell>July 3, 2024</Table.Cell>
            <Table.Cell>Cancel</Table.Cell>
            <Table.Cell>1999 for 5 item</Table.Cell>
            <Table.Cell>
            <Button color="warning" size="xs">View</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Table>
    </div>
        <div className='button'>
          
          <ButtonInput>
          </ButtonInput>
        </div>
    </div>
  
  );
};

export default orderPagelist;