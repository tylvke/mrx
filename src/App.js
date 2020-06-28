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
      </div>
    );
  }
}
export default connect(({ user }) => ({
  user,
}))(App);
