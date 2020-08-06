import React, { Component } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import TableData from './Components/TableData';
import AddUser from './Components/AddUser';
import DataUser from './Data.json'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // khoi tao state roi truyen qua component con duoi dang props
      showForm: false,
      data: DataUser
    }
  }

  // tạo hàm đổi trạng thái state
  doiTrangthai = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* truyen tu Component cha sang Component con duoi dang prop, su dung arrow function va truyen duoi dang function */}
                <SearchBar ketnoi={() => this.doiTrangthai()} showForm={this.state.showForm} />
                <hr />
              </div>
              {/* truyen du lieu qua component con thong qua props */}
              <TableData dataUser={this.state.data}/> 
              {/* state khi truyen duoi dang props thi k can arrow function */}
              <AddUser showForm={this.state.showForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;