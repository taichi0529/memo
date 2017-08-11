import React, {Component} from 'react';

class List extends Component {

    constructor(props) {
        super(props);
        this.handleClickList = this.handleClickList.bind(this);
    }

    handleClickList() {
        this.props.handleClickList(this.props.memo);
    }

    render() {
        //stateでやる方が正しいか？
        //TODO 時間無いのでコピペ。後で直す。
        if(this.props.active){
            return (
                <li className="list__li list__li_active" onClick={this.handleClickList}>
                    <div className="list__li__div">
                        <p className="list__li__title">{this.props.memo.title}</p>
                        <p className="list__li__head">
                            <time className="list__li__time">{this.props.memo.lastModifiedForList}</time>
                            {this.props.memo.head}
                        </p>
                    </div>
                </li>
            );
        }


        return (
            <li className="list__li {this.props.active || }" onClick={this.handleClickList}>
                <div className="list__li__div">
                    <p className="list__li__title">{this.props.memo.title}</p>
                    <p className="list__li__head">
                        <time className="list__li__time">{this.props.memo.lastModifiedForList}</time>
                        {this.props.memo.head}
                    </p>
                </div>
            </li>
        );
    }
}

export default List;