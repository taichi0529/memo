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
        this.state.currentMemo = memo;
        this.setState(this.state);
    }

    handleChangeText(e) {
        this.props.handleChangeText();
        this.state.currentMemo.text = e.target.value;
        this.state.currentMemo.updateLastModified();
        this.setState(this.state);
    }

    render() {
        return (
            <div className="text__wrap">
                <time className="text__time">{this.state.currentMemo && this.state.currentMemo.lastModifiedForText}</time>
                <textarea name="" className="text__textarea" cols="30" rows="10"
                          value={this.state.currentMemo && this.state.currentMemo.text || ""} onChange={this.handleChangeText}>
                </textarea>
            </div>
        );
    }
}

export default Text;