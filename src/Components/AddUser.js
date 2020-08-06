import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <form>
                    <div className="card text-left mt-2">
                        <div className="card text-white bg-outline-success mb-3">
                            <div className="card-header">Thêm mới User</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên User"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <select
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
                                    <input
                                        type="reset"
                                        className="btn btn-block btn-primary"
                                        value="Thêm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUser;