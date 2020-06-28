import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  async getDetail() {
    const { dispatch } = this.props;
    try{
      dispatch({
        type: "user/fetch",
        dataType: "detail",
      })
    }catch(err){
      console.log(err);
    }
  }

  async changeName() {
    const { dispatch } = this.props;
    const payload = document.getElementById("input").value;
    try{
      const res= await dispatch({
        type: "user/handle",
        action: "add",
        payload,
      });
      await this.getDetail();
    } catch(err){
      console.log(err);
    }
  }

  async open() {
    const { dispatch } = this.props;
    await dispatch({
      type: "tag/handle",
      action: "sign",
    });
    await dispatch({
      type: "global/fetch",
      dataType: "authorize",
    });
    await dispatch({
      type: "tag/handle",
      action: "open",
      payload: {tagId: 1},
    });
    alert('开通成功');
  }

  componentDidMount() {
    this.getDetail();
  }

  render() {
    const {
      user: {
        detail: { username },
      },
    } = this.props;
    return (
      <div>
        <span>{username}</span>
        <br />
        <input id="input" />
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          改变名字
        </button>
        <button
          onClick={() => {
            this.open();
          }}
        >
          开通金字招牌
        </button>
      </div>
    );
  }
}
export default connect(({ user }) => ({
  user,
}))(App);
