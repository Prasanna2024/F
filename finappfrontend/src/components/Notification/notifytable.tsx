import { Table } from '@mantine/core';
import { useStore } from '../../store/store';
import { Link } from 'react-router-dom';
import classes from './Notification.module.css'
import { Button } from '@mantine/core';
export default function NotifyTable() {
    const { notification } = useStore();
    const rows = notification.map((element: any) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.amount}</Table.Td>
            <Table.Td>{element.Date_in ? new Date(element.Date_in).toLocaleString() : 'N/A'}</Table.Td>
            <Table.Td>{element.Date_out ? new Date(element.Date_out).toLocaleString() : 'N/A'}</Table.Td>
            <Table.Td>{element.interest}</Table.Td>
            <Link to={`/notification/${element.id}`} >
                <Table.Td><Button variant="filled">click</Button></Table.Td>
            </Link>

        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Id</Table.Th>
                    <Table.Th>Name of Finance</Table.Th>
                    <Table.Th>Amount</Table.Th>
                    <Table.Th>Date-In</Table.Th>
                    <Table.Th>Date-out</Table.Th>
                    <Table.Th>Interest</Table.Th>
                    <Table.Th>view</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}
