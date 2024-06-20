
import './App.css';
import BstCategoryList from './components/BstCategoryList';
import { useEffect } from 'react';
//import axios from 'axios';
import React, { useState } from 'react';
import axios from './api/Bstapi';
import BstCategoryForm from './components/BstCategoryForm';


function App() {
  
  const[bstCategories,setBstCategories] = useState([]);

  const getCategories = async ()=>{
    try {
      const bstCateResponse = await axios.get("BstCategory");
    setBstCategories(bstCateResponse.data);
    } catch (error){
      console.log("loi", error);
    }
  }

  useEffect(()=>{
    getCategories();
    console.log("bstCategories:", bstCategories);
  },[])

  const [bstCategoryIsFrorm, setBstCategoryIsFrorm] = useState(false);

  const bsthandleAddNew = (param)=>{
    setBstCategoryIsFrorm(param);
  }
  return (
    <div className="container border my-3">
      <h1>bui son tung - call api</h1>
      
      <BstCategoryList  renderBstCategories = {bstCategories}
                         onAddNew={bsthandleAddNew} />
                    
      <hr/>
      {
        bstCategoryIsFrorm==true? <BstCategoryForm />:""
      }
     
    </div>
  );
}

export default App;
