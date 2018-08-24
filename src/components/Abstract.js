export default class {
  constructor(props){
    this.$dom = null;
    this.props = props;
  }
  setState(obj) {
    Object.assign(this.state, obj);
    this.render();
  }
  render() {
    return this.$dom;
  }
}

