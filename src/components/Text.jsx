import React, {Component} from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMemo: null
        };
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    setCurrentMemo(memo) {
        this.setState({currentMemo: memo});
    }

    handleChangeText(e) {
        this.props.handleChangeText();
        let currentMemo = this.state.currentMemo;
        currentMemo.text = e.target.value;
        currentMemo.updateLastModified();
        this.setState({currentMemo: currentMemo});
    }

    render() {
        return (
            <div className="text__wrap">
                <time
                    className="text__time">{this.state.currentMemo && this.state.currentMemo.lastModifiedForText}</time>
                <textarea name="" className="text__textarea" cols="30" rows="10"
                          value={(this.state.currentMemo && this.state.currentMemo.text) || ""}
                          onChange={this.handleChangeText}>
                </textarea>
            </div>
        );
    }
}

export default Text;