import React from 'react'

const TableList = ({formData,show}) => {
    const filteredData = [...formData].filter((data) => {
        if (show === 'all') {
            return true;
        }
        return data.status === show;
    });
    const sortedData = filteredData.sort((a, b) => {
        const statusOrder = ['active', 'completed', 'pending', 'archive'];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      });
     
  return (
   
 <>
      {sortedData ? ( 
        sortedData.map((data,index)=>(
            <tr key={index}>
            <td>{data.name}</td>
            <td>{data.status}</td>
          </tr>
        ))
    
      ) : null}
   </>
  )
}

export default TableList