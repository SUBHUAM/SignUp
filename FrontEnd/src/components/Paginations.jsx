import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

export const Paginations=({totalElements,pageState,setPageState})=>{

const [active,setActive]=useState(1);

// let active = 1;
console.log(pageState);

const handleClick=(event,key)=>{
  setActive(key);
  setPageState({...pageState,pageNo:key-1});
}

let items = [];
for (let number = 1; number <= Math.ceil(totalElements/pageState.pageSize); number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={(event)=>handleClick(event,number)}>
      {number}
    </Pagination.Item>,
  );
}

let setlimitFun=()=>{
  let e=document.getElementById("selectRange");
  setPageState({...pageState,pageSize:e.value,pageNo:0});
  setActive(1);
}

let pageSizes=[15,20,50,100];

  return (
    <div>
    <select 
            onChange={()=>{setlimitFun()}}
            id="selectRange"
            className="SelectComponent border rounded 
             "
          >
            <option className="optionBtn" value={pageState.pageSize}>
              Show Entries: {pageState.pageSize}
            </option>
            {pageSizes.map((x) => {
              if (x != pageState.pageSize) {
                return (
                  <option key={x} className="optionBtn" value={x}>
                    {x}
                  </option>
                );
              }
            })}
          </select>
          <Pagination className='mt-2'>
            {items}
            </Pagination>
    </div>
  )
}

export default Paginations;