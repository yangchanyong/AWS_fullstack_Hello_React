import React, { Component } from 'react';

class EventPractice extends Component {
    state = {message: ""};
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
               <input 
                name="message" 
                placeholder="아무거나 입력해보세요" 
                value={this.state.message}
                onChange={(e) => {
                    this.setState({
                        message: e.target.value,
                    });
                }}
            /> 
            <button onClick={() => {
                alert(this.state.message);
                this.setState({message:""});
            }} 
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
