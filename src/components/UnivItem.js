import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BsInfoCircle } from "react-icons/bs";

const UnivItem = (props) =>{
    return(
        <div className="col mb-5">

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Nama Universitas</th>
      <th>Tempat</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.univ.name}</td>
      <td>{props.univ.country}</td>
      <td><Link className="btn btn-outline-light mt-auto" to={`/details/${props.univ.name}`}><BsInfoCircle /></Link></td>
    </tr>
  </tbody>
</Table>

    </div>
    );
}

export default UnivItem;