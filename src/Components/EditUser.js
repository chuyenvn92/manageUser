import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card text-left">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header text-center">Sửa thông tin</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input
                                    onChange={(event) => { this.isChange(event) }}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên User"
                                />
                            </div>
                            <div className="form-group">
                                <input
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
                                        defaultValue={"DEFAULT"}
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
                                    onClick={() => this.props.changeEditUserStatus()}>Thêm
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