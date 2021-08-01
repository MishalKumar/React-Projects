/*Task 4: User Interface
An excel file "SaudaBookTrades.xlsx" will be shared. Build a ReactJS website that can import and showcase the data inside the Excel Sheet.*/ 



import React, { useState } from 'react';

import * as XLSX from 'xlsx';

import './App.css';

import Header from './Header.';


function  App() {


  const [items, setItems] = useState([]);

  // getting file here to import data of excel sheet to render

  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {

      // reading excel file here
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {

        const bufferArray = e.target.result;

        const workbook = XLSX.read(bufferArray,{type: 'buffer'});

        const worksheetName = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[worksheetName];

        const data = XLSX.utils.sheet_to_json(worksheet);

        resolve(data);


      };

      fileReader.onerror = (error) => {
        reject(error);
      };

    });

    promise.then((d) => {

      setItems(d);

    });
  };

  return (

    // taking input as excel file
    <div>
      <Header/>

      <h1 className="text-info mt-5 mb-4 col-md-8 offset-md-5" >Excelsheet Data</h1>
      <div className = " col-md-8 offset-md-5 mb-5">
        <input type="file" onChange={(e)=>{
          const file = e.target.files[0];
          readExcel(file);
        }}/>
      </div>
      <div className = "mt-5">
        <table className="table container border-primary table-info table-striped table-bordered table-hover ">
          <thead>
            <tr class="table-dark">
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Buyer</th>
              <th scope="col">Seller</th>
              <th scope="col">Broker</th>
              <th scope="col">Variety</th>
              <th scope="col">Station</th>
              <th scope="col">Delivery By</th>
              <th scope="col">Quantity</th>
              <th scope="col">Quantity Unit</th>
              <th scope="col">Confirmation</th>
              <th scope="col">Original Price</th>
              <th scope="col">Accepted Price</th>
              <th scope="col">Price Unit</th>
              <th scope="col">Created At</th>
              <th scope="col">Confirmed At</th>
              <th scope="col">Staple</th>
              <th scope="col">Strength</th>
              <th scope="col">Trash</th>
              <th scope="col">Moisture</th>
              <th scope="col">Mic Minimum</th>
              <th scope="col">Mic Maximum</th>
              <th scope="col">Remarks</th>
              <th scope="col">Dhara</th>
            </tr>
          </thead>
          <tbody>

            {
              items.map((d)=> (
              <tr key = {d.Type}>
                <td>{d.Type}</td>
                <td>{d.Status}</td>
                <td>{d.Buyer}</td>
                <td>{d.Seller}</td>
                <td>{d.Broker}</td>
                <td>{d.Variety}</td>
                <td>{d.Station}</td>
                <td>{d.DeliveryBy}</td>
                <td>{d.Quantity}</td>
                <td>{d["Quantity Unit"]}</td>
                <td>{d["Confirmation ID"]}</td>
                <td>{d["Original Price"]}</td>
                <td>{d["Accepted Price"]}</td>
                <td>{d["Price Unit"]}</td>
                <td>{d["Created At"]}</td>
                <td>{d["Confirmed At"]}</td>
                <td>{d["Staple"]}</td>
                <td>{d["Strength"]}</td>
                <td>{d["Trash"]}</td>
                <td>{d["Moisture"]}</td>
                <td>{d["Mic Minimum"]}</td>
                <td>{d["Mic Maximum"]}</td>
                <td>{d["Remarks"]}</td>
                <td>{d.Dhara}</td>
                
              </tr>

              ))
            }
          </tbody>
        </table>
        </div>
    </div>

  );
  
}


export default App;
