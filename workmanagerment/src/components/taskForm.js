import React from 'react';
class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ 
            id : '',
            name :'' ,
            status : false
        }
    }
    
  
    onChange =(event)=>{ /** ham onChange luon tra ve 1 target  */

        var name = event.target.name ;
        var value = event.target.value;
        
        if(name ==="status"){ /* Nếu name của input là "true hoặc false" kiểu chuỗi thì gán lại lại bằng kiểu boolen*/
            value = event.target.value==="true"?true:false ; 
        }
        this.setState({
            [name]: value
        })
       
    }
    onSubmit =(event) =>{
        event.preventDefault();
        
        var input = document.getElementById('ten') ;
        if(input.value==''){
            input.style.border = 'solid 3px red';
            
        }
        else{
            this.props.onSubmit(this.state);
        }
       
    }
    onCancel= () =>{
        this.props.onhideDisplay();
    }

    componentDidMount(){
        if(this.props.task){
            this.setState({
                id : this.props.task.id , 
                name : this.props.task.name , 
                status : this.props.task.status
            })       
            document.getElementById('ten').value = this.props.task.name ;
        }
    }
    UNSAFE_componentWillReceiveProps(prop){  
        console.log(prop)
        if(prop && prop.task){
            this.setState({
                id : prop.task.id , 
                name : prop.task.name , 
                status : prop.task.status
            })       
            document.getElementById('ten').value = prop.task.name ;
        }
    }
    render() {
        var {tasks} = this.state;
        return (
            <div className="card">
                <div className="card-header">{this.state.id ? 'Cập Nhật Công Việc':'Thêm Công Việc'} <span onClick={this.props.onhideDisplay}><i class="fas fa-times"></i></span></div>
                <form onSubmit={this.onSubmit} >
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor>Tên:</label>
                        <input type="text" id="ten" className="form-control" name="name" onChange={this.onChange}/>
                    </div>

                </div>
                <div className="card-footer">
                    <div className="form-group">
                        <label htmlFor>Trạng Thái :</label>
                        <select className="form-control" name="status" value ={this.state.status} onChange={this.onChange} >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                   <p><input type="submit" className="btn btn-primary" value="+ Lưu"/>
                    <button className="btn btn-danger" onClick={this.onCancel}><i class="fas fa-times"></i> Hủy Bỏ</button>
                </p>
                </div>
                </form>
            </div>

        )
    }
}

export default TaskForm;