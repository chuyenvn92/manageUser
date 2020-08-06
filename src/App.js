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
      data: DataUser,
      searchText: ''
    }
  }

  // tạo hàm đổi trạng thái state
  doiTrangthai = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  // hàm lấy dữ liệu từ bên componentSearch gửi về
  // sau đó lưu dữ liệu gửi về vào trong state
  // sử dụng forEach để duyệt từng phần tử thay vì map, vì map phải trả về giá trị còn forEach thì không
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  render() {
    // khai báo mảng trung gian để lưu lại những phần tử thỏa mãn điều kiện tìm kiếm
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* truyen tu Component cha sang Component con duoi dang prop, su dung arrow function va truyen duoi dang function */}
                <SearchBar ketnoi={() => this.doiTrangthai()} showForm={this.state.showForm}
                  getTextSearch={(dl) => this.getTextSearch(dl)} />
                <hr />
              </div>
              {/* truyen du lieu qua component con thong qua props */}
              <TableData dataUser={ketqua} />
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