export default {
    getAuthorize() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log('authorize')
          resolve({
            data: {
                protocol: 1,
            },
            code: 0,
            msg: "success",
          });
        }, 500);
      });
    },
  };
  