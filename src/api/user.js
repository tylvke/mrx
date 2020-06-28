export default {
  getDetail() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          data: {
            username: localStorage.getItem("username"),
          },
          code: 0,
          msg: "success",
        });
        // reject({
        //   code:1,
        //   msg:'获取失败',
        // });
      }, 1000);
    });
  },
  add(payload) {
    return new Promise((resolve) => {
      localStorage.setItem("username", payload);
      setTimeout(() => {
        resolve({
          code: 0,
          msg: "success",
        });
      }, 300);
    });
  },
  delete() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 0,
          msg: "success",
        });
      }, 300);
    });
  }
};
