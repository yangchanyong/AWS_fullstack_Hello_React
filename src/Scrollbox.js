import React, { Component } from 'react';

class Scrollbox extends Component {
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box
        this.box.scrollTop = scrollHeight - clientHeight;
    };
    scrollToHigh = () => {
        const {scrollHeight, clientHeight} = this.box
        this.box.scrollTop = clientHeight - scrollHeight
    }

    render() {
        const style = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            position: "relative",
        };

        const innerStyle = {
            width: "100%",
            height: "650px",
            background: "linear-Gradient(white, black)",
        };
        return (
            <div style={style} ref={(ref) => (this.box = ref)}>
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default Scrollbox;