import React, { useEffect, useState } from 'react';
import Paging from './Paging';
import Pagination from './Pagination';

const Content=()=>{


   let API ="https://jsonplaceholder.typicode.com/users";

  const [data,setdata] = useState([]);
  const [curentpage,setcurentpage]=useState(1);
  const [postperpage,setpostperpage]=useState(4);

   const fetchApiData= async(url)=>{
    try{
     const res=await fetch(url);
    //  const data2=await res.json();
    setdata(await res.json())
        
    } catch(error)
    {
        console.log(error);
    }
   }

 useEffect(()=>{
      fetchApiData(API);
   },[]);

const indexoflastpage=curentpage*postperpage;
const indexoffirstpage=indexoflastpage-postperpage;
const currentpost=data.slice(indexoffirstpage,indexoflastpage);

const paginate=(number)=>{
        setcurentpage(number);
}
 
    return (
        <>
         
        
            {
                currentpost.map((value)=>{
                    return (
                       
                       <Paging
                        key={value.id}
                         {...value}                        
                       /> 
                     
                       
                    )
                })
            }

                       <Pagination
                        postperpage={postperpage}
                        totalpost={data.length}
                        paginate={paginate}    
                        />
        </>
    )
}

export default Content ;

