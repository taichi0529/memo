class Memo {
    constructor(data = null) {
        if (data === null) {
            let lastModified = Memo.createLastModified();
            this.data = {
                id: lastModified,
                text: "",
                lastModified: lastModified
            };
        } else {
            this.data = data;
        }
    }

    updateLastModified (){
        this.data.lastModified = Memo.createLastModified();
    }

    get id() {
        return this.data.id;
    }

    set text(text){
        this.data.text = text;
    }

    get text() {
        return this.data.text;
    }

    get lastModified() {
        return this.data.lastModified;
    }

    get lastModifiedForList() {
        let date = new Date();
        date.setTime(this.data.lastModified);
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        // return this.data.lastModified;
    }

    get lastModifiedForText() {
        let date = new Date();
        date.setTime(this.data.lastModified);
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 "
            + date.getHours() + ":" + ("0" + date.getMinutes()).substr(-2);
    }

    get title() {
        let title = "新規メモ";
        if (this.text !== "") {
            let pos = this.text.indexOf("\n");
            if (pos === -1) {
                title = this.text;
            } else {
                title = this.text.substr(0, pos);
            }
        }
        return title;
    }

    get head() {
        //TODO 二行目より後に文字があると取得出来ないので対応する
        let head = "追加テキストなし";
        if (this.text !== "") {
            let pos = this.text.indexOf("\n");
            if (pos !== -1) {
                let pos2 = this.text.indexOf("\n", pos + 1);
                if (pos2 !== -1) {
                    head = this.text.substr(pos, pos2 - pos);
                } else {
                    head = this.text.substr(pos);
                }
            }
        }
        return head;
    }


    static createLastModified() {
        return (new Date()).getTime();
    }
}

export default Memo;