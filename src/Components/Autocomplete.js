import React, { Component } from 'react'

export default class Autocomplete extends Component {

    constructor(props){
        super(props);
        this.inputRef=React.createRef()
        this.state={
            inp:'',
            lists:['Abhishek','Ajit','Aniket','Akshay','Chirag','Coral','Alok','Isha','Imri'],
            newList:[],
            selectedName:'',
        }
    }

    onHandleChange=(e)=>{
        // console.log(e.target.value)
        let textValue = e.target.value;
        // if(textValue.length > 0){
        //     const regex = new RegExp(`^${textValue}`,'i')
        //     var newList1 = this.state.lists.sort().filter(list=>regex.test(list))
        //     // console.log(newList1)
        // }
        // this.setState({newList:newList1})
        if(textValue.length === 0){
            this.setState({inp:textValue,newList:[]})
        }
        if(textValue.length > 0){
            const regex = new RegExp(`^${textValue}`,'i')
            var newList = this.state.lists.sort().filter(list=>regex.test(list))
            this.setState({
                inp:textValue,
                newList:newList,
            })
        }
        else{
            this.setState({newList:[]})
        }
        }

        SelectedList=(name)=>{
            // console.log(name)
            this.setState({selectedName:'You Have Selected '+name})
        }
        
        componentDidMount=()=>{
            this.inputRef.current.focus()
        }

    render() {
        // console.log(this.state.newList)
        const {inp,lists,newList} =this.state

        return (
            <div className='maindiv'>
                <div className='container'>
                <h1 className='text-center text-uppercase title'>Auto Complete</h1>
                   <div className='form-group'>
                       <label className='poppin'>Auto Complete Textbox</label>
                       <input type='text' className='form-control poppin' value={inp} ref={this.inputRef} onChange={this.onHandleChange} />
                    </div>
                    <div className=' rounded poppin'>
                        {newList.length === 0?
                        (<div></div>):
                        (<div className='border border-dark poppin'>
                            {newList.map((list,i)=>(
                            <p className='ml-2' key={i} onClick={()=>this.SelectedList(list)}>{list}</p>
                        ))}
                        </div>
                        )}
                    </div>
                    <h3 className='mt-5 poppin'>{this.state.selectedName}</h3>
                </div>  
            </div>
        )
    }
}
