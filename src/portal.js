import React from 'react';
import reactdom from 'react-dom';
import Login from './Login';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.container=document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillUnmount(){
        document.body.removeChild(this.container);
    }

    render(){
        return reactdom.createPortal(
            <div className='portal' style={{width:'100%',height:'100%',backgroundColor:'rgb(243,243,243,0.4)',position:'absolute',left:'0',top:'0'}}>
                <div style={{position:'absolute',left:'calc(50% - 190px)',top:'calc(50% - 150px)'}}>
                    <Login close={this.props.close}/>
                </div>
            </div>,
            this.container
        );
    }
}

export default Modal;