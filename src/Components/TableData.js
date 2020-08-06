import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

class TableData extends Component {

    // ham anh xa du lieu tu component cha sang component con
    mappingDataUser = () =>
        this.props.dataUser.map((value, key) => (
            <TableDataRow name={value.name} phone={value.phone} permission={value.permission} key={key} stt={key}/>
        ));
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