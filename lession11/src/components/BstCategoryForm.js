import React from 'react'

export default function BstCategoryForm({onCloseFrom}) {
  
    const [bstCategoryName,setBstCategoryName] = useState("");
    const [bstCategoryStatus,setBstCategoryStatus] = useState(true);
  
  
    const bstHandleClose = ()=>{
    onCloseFrom(false);
  }
  
  
    return (
        <div>
            <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Category Name</span>
                <input type="text" className="form-control" 
                    name='bstCategoryName'
                    value={bstCategoryName}
                    placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
                </div>
                
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">bstCategory Status</span>
                <select className='form-control'
                    name='bstCategoryStatus' 
                        value={bstCategoryStatus} >
                    <option value={true}>hien thi</option>
                    <option value={false}>tam khoa</option>
                </select>    
                </div>
                <button className='btn btn-success'>ghi lai</button>
                <button className='btn btn-danger' onClick={bstHandleClose}>dong</button>
            </form>
        </div>
    )
}