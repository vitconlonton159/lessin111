import React from 'react';

export default function BstCategoryList({renderBstCategories, onAddNew}){
    console.log("renderBstCategories: ", renderBstCategories);
    let bstCategoryElement = renderBstCategories.map((bstCategory,index)=>{
        return(
            <tr ket={index}>
                <th>{index+1}</th>
                <td>{bstCategory.bstId}</td>
                <td>{bstCategory.bstCategoryName}</td>
                <td>{bstCategory.bstCategoryStatus==true?"hienthi":"tamkhoa"}</td>
              

            </tr>
        )
    })
    const bstHandleAdd = ()=>{
        onAddNew(true);
    }
    
    return (
        <div className='container m-2'>
            <h2>danh sahc loai san pham</h2>
            <table className='table table-bordered'>
               <thead>
                <tr>
                    <th>#</th>
                    <th>ma loai </th>
                    <th>ten loai </th>
                    <th>trang thai</th>
                    <th>chuc nang</th>
                </tr>
               </thead>
               <tbody>
               {bstCategoryElement}
               </tbody>
                <button className='btn btn-primary' onClick={bstHandleAdd} >them moi</button>
            </table>


        </div>
    )
}


