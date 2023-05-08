// import ValidationSample from "./ValidationSample";
import Scrollbox from "./Scrollbox.js";

import React, {Component} from "react";

class App extends Component {
    render() {

    return (
      <div>
        <Scrollbox ref={(ref) =>(this.scrollbox = ref)}/>
        <button onClick={() => this.scrollbox.scrollToHigh()}>맨 위로</button>
        <button onClick={() => this.scrollbox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  };
}

export default App;

// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFn from './EventPracticeFn';
// import ValidationSample from './ValidationSample';

// const App = () => {
//   return (
//     // <MyComponent name="react">Hello React</MyComponent>
//     // <Counter />
//     // <Say />
//     // <EventPractice />
//     // <EventPracticeFn />
//     <ValidationSample />
//   );
// };

// export default App;