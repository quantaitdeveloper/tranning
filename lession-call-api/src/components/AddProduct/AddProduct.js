import React, {Component} from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            id :'',
            txtName:'',
            txtPrice:'',
            status:''
        }
    }
    onhandleChange =(e)=>{
        let name = e.target.name;
        let value = e.target.type === 'checkbox'? e.target.checked : e.target.value;
        this.setState({
            [name] : value
        })
    }
    onhandleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        const {txtName,txtPrice,status} =this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.onhandleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" name="txtName" value={txtName} onChange={this.onhandleChange} placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Giá</label>
                                <input type="number" className="form-control" id="exampleInputPassword1"
                                       name="txtPrice" value={txtPrice} onChange={this.onhandleChange} placeholder=""/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" name="status" value={status} onChange={this.onhandleChange} className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Còn hàng</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;