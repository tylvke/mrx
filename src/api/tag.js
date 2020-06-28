export default {
    sign() {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve({
            code: 0,
            msg: "success",
          });
          console.log('sign')
        }, 200);
      });
    },
    open() {
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve({
              code: 0,
              msg: "success",
            });
            console.log('open')
          }, 100);
        });
      },
  };
  