import React, { Component } from 'react';

class EditUser extends Component {
    // sử dụng state để lưu giữ thông tin cần sửa
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permission: this.props.userEditObject.permission
        }
    }
    // hàm thay đổi thông tin cần sửa qua state
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    saveButton = () => {
        this.props.changeEditUserStatus();
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserInfo(info);
    }

    render() {
        return (
            <div className="col-12">
                <div className="card text-left">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header text-center">Sửa thông tin</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input
                                    defaultValue={this.props.userEditObject.name}
                                    onChange={(event) => { this.isChange(event) }}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên User"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    defaultValue={this.props.userEditObject.phone}
                                    onChange={(event) => { this.isChange(event) }}
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Điện thoại"
                                />
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <select
                                        onChange={(event) => { this.isChange(event) }}
                                        name="permission"
                                        className="custom-select"
                                        id="inputGroupSelect02"
                                        defaultValue={this.props.userEditObject.permission}
                                    >
                                        <option value="DEFAULT" disabled>
                                            Chọn quyền
                      </option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Mod</option>
                                        <option value={3}>Member</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    type="reset"
                                    className="btn btn-block btn-primary"
                                    onClick={() => this.saveButton()}>Sửa
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;