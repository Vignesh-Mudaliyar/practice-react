import React from 'react'
import { Table } from 'react-bootstrap';
import Data from './json/data.json'

export default function Dashboard() {
    console.log(Data.user);
    return (
        <div>
            <Table bordered >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>email</th>
                        <th>phoneNo</th>
                    </tr>
                </thead>
                <tbody>
            {Data.user.map((value,index) =>(
            <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.email}</td>
                <td>{value.phoneNo}</td>
            </tr>    

    ))}
    </tbody>
    </Table>
        </div>
    )
}
