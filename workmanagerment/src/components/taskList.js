import React from 'react';
import TaskItem from './taskItem';
class TaskList extends React.Component {
    render() {
        /* nhận prop từ tk App */
        var tasks = this.props.tasks; /* tasks nay la cac gia tri cua state bao gom 1 mang object */
        var elmTasks = tasks.map((task, index) => {
            /*lap qua moi phan tu cua task*/
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete ={this.props.onDelete}
                onUpdate ={this.props.onUpdate}
            >
            </TaskItem> /*truyn cho tk con taskitem 1 prop task , 1 prop index  */
        })
        return (
            <div className="col-lg-12">


                <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">


                            </td>
                            <td>

                                <div className="form-group">
                                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <select className="form-control" name id>
                                        <option value={-1} >Tất Cả</option>
                                        <option value={1} >Kích Hoạt</option>
                                        <option value={0} >Ẩn</option>
                                    </select>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;