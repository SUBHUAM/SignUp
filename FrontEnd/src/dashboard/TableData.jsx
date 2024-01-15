import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Paginations from '../components/Paginations';
import axios from "axios";
import useToastr from '../components/toast';

export default function TableData() {
  let state={
    pageNo: 0,
    pageSize: 10,
    sortBy: "id",
    sortDir: "asc"
  }
  const [pageData,setPageData]=useState("");
  const [pageSize,setPageSize]=useState(0);
  const[limit,setLimit]=useState(15);
  const [pageState,setPageState]=useState(state);
  const [success,error]=useToastr();


  useEffect(()=>{

  fetchData();

  },[pageState]);

  const fetchData= async()=>{
    await axios.post(`http://localhost:8080/products/getProducts`,pageState)
    .then((res)=>{
      setPageData(res.data);
      console.log(res);
    })
    .catch(err=>{
     error("Something went wrong try again")
    })
  }

  return (
    <div>
      <Container className='mt-5'>
      <h3>Table Content</h3>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {pageData.content && pageData.content.length >0 && pageData.content.map((item,index)=>{
          return(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    {pageData.totalElements &&
        <Paginations 
        totalElements={pageData.totalElements}
        pageState={pageState}
        setPageState={setPageState}
        />
    }

    </Container>
    </div>
  )
}
