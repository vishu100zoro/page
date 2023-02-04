import React from 'react';

const Pagination=({postperpage,totalpost,paginate})=>
{
  const pagenumber=[]
  for(let i=1;i<=Math.ceil(totalpost/postperpage);i++)
  {
    pagenumber.push(i);
  }

return(
    <>
        <nav className='pagination'>
            <ul>
               {
                pagenumber.map((number)=>{
                  return<li key={number}>
                     <a onClick={()=>paginate(number)} href='!#'>{number}</a>
                    </li>
                })
               }
            </ul>
        </nav>
    </>
)



}

export default Pagination;