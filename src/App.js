import React from 'react';
import './App.css';
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import TableData from "./Components/TableData";
import AddUser from './Components/AddUser';

function App() {
  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchBar />
              <hr />
            </div>
            <TableData />
            <AddUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
