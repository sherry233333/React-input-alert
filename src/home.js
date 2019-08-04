import React from 'react';
import Modal from './portal'
import Button from "./button"

class home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modalshow:false,
            button:{
                add:'添加'
            }
        }
        this.clickAdd=this.clickAdd.bind(this);
    }
    clickAdd(){
        this.setState((preState)=>({modalshow:!preState.modalshow}));
    }
    render(){
        return (
            <div>
                <a href='javascript:'>测试有弹框的时候这个a标签还能点击吗</a>
                <br></br>
                <Button name={this.state.button.add} click={this.clickAdd}/>
                {this.state.modalshow && <Modal close={this.clickAdd}/>}
            </div>
            
        );
    }
}

export default home;