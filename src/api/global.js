export default {
    getAuthorize() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve({
            data: {},
            code: 0,
            msg: "success",
          });
          console.log('authorize')
        }, 500);
      });
    },
  };
  