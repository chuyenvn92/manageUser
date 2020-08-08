import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

class TableData extends Component {

    // ham anh xa du lieu tu component cha sang component con
    mappingDataUser = () =>
        this.props.dataUser.map((value, key) => (
            <TableDataRow editUser={(user) => this.props.editUser(value)} name={value.name} phone={value.phone} permission={value.permission} id={value.id} key={key} stt={key}
                changeEditUserStatus={() => this.props.changeEditUserStatus()} deleteButon={(id) => { this.deleteButon(id) }} />
        ));

    deleteButon = (id) => {
        this.props.deleteButon(id)
    }
    // this.props.editUser
    render() {
        return (
            <div className="col">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;