import React, { Component } from 'react';

class EventPractice extends Component {
    state = {message: "", username:""};
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.username + ":" + this.state.message);
        this.setState({message:""});
    };

    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
               <input 
                name="username" 
                placeholder="아무거나 입력해보세요" 
                value={this.state.username}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                /> 
               <input 
                name="message" 
                placeholder="아무거나 입력해보세요" 
                value={this.state.message}
                onChange={this.handleChange}
                /> 
            <button onClick={this.handleClick}
            >
                확인
            </button>
            <h2>{this.state.message}</h2>
            </div>
        );
    }
}


export default EventPractice;

// import React from 'react';

// const EventPractice = () => {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input 
//             name="message" 
//             placeholder="아무거나 입력해보세요" 
//             onChange={(e) => {
//                 console.log(e);
//                 console.log(e.target);
//                 // target.value로 접근해야함.
//                 console.log(e.target.value);
//             }}
//             />
//         </div>
//     );
// };

// export default EventPractice;
