import React, { Component } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import TableData from "./Components/TableData";
import AddUser from "./Components/AddUser";
import DataUser from "./Data.json";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // khoi tao state roi truyen qua component con duoi dang props
      showForm: false,
      data: DataUser,
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    };
  }

  // tạo hàm đổi trạng thái state
  doiTrangthai = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  // hàm lấy dữ liệu từ bên componentSearch gửi về
  // sau đó lưu dữ liệu gửi về vào trong state
  // sử dụng forEach để duyệt từng phần tử thay vì map, vì map phải trả về giá trị còn forEach thì không
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });
  };

  // đóng gói dữ liêu từ AddUser trả lên rồi cập nhật lại data mới với setState
  getNewUserData = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    });
  };
  // dữ liệu từ EditUser gửi lên
  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });
  };

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };
  getUserInfo = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    });
  };
  deleteButon = (id) => {
    var tempData = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: tempData
    });
  };

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
                <SearchBar
                  getUserInfo={(info) => this.getUserInfo(info)}
                  userEditObject={this.state.userEditObject}
                  ketnoi={() => this.doiTrangthai()}
                  showForm={this.state.showForm}
                  getTextSearch={(dl) => this.getTextSearch(dl)}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus={() => this.changeEditUserStatus()}
                />
                <hr />
              </div>
              {/* truyen du lieu qua component con thong qua props */}
              <TableData
                deleteButon={(id) => {
                  this.deleteButon(id);
                }}
                dataUser={ketqua}
                editUser={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              {/* state khi truyen duoi dang props thi k can arrow function */}
              <AddUser
                showForm={this.state.showForm}
                getNewUserData={(name, phone, permission) =>
                  this.getNewUserData(name, phone, permission)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
