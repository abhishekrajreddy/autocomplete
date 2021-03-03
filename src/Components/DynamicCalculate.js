import React, { Component } from 'react'

export default class DynamicCalculate extends Component {
    constructor(props) {
        super(props)
        this.state = {
             firstInp:[],
             inputs:[],
             total:'',
        }
    }
    onAdd=()=>{
        this.setState({inputs:[...this.state.inputs,'']})
    }
   
    onHandleChange1=(e)=>{
        this.setState({firstInp:[e.target.value]})

    }
     onHandleChange=(e,i)=>{
        const {inputs}=this.state
        inputs[i]=e.target.value
        this.setState({inputs:this.state.inputs})
    }

    onCalculate=()=>{
        var arr1=this.state.firstInp;
        var arr=this.state.inputs
        var newarr=arr1.concat(arr)
        if(arr1.length === 0 ){
            alert('Invalid')
        }
        else{
        var newsum1=newarr.reduce((a,b)=>{
           return parseInt(a)+parseInt(b)
        })
        this.setState({total:`Total is ${newsum1} `})
        }
    }
    
    onRemove=(index)=>{
        var del=this.state.inputs.splice(index,1) 
        this.setState({inputs:this.state.inputs})
    }

    render() {
        return (
            <div>
                <h1 className='text-center mt-5 ' >Dynamic Calculator</h1>
                <div className='container mt-5'>
                <input type='number' className='mb-2 py-1' name='' value={this.state.firstInp} onChange={this.onHandleChange1} />
                    {this.state.inputs.map((inp,i)=>(
                        <div key={i}>
                            <input type='number' className=' py-1 ' name='' value={inp} onChange={(e)=>this.onHandleChange(e,i)} />
                            <button className='btn btn-outline-danger ml-1' onClick={()=>this.onRemove(i)}>Remove</button>
                        </div>    
                    ))}
                    <div></div>                    
                    <button className='btn btn-primary my-2' onClick={this.onAdd}>Add</button>
                    <button className='btn btn-success my-2 ml-2' onClick={this.onCalculate}>Calculate</button>
                    <h1>{this.state.total}</h1>
                </div>
            </div>
        )
    }
}
