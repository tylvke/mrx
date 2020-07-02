export default {
    getGuideState() {
      return new Promise((resolve,reject) => {
        console.log('guide')
        setTimeout(() => {
          resolve({
            data: {
              version: 2,
            },
            code: 0,
            msg: "success",
          });
        }, 100);
      });
    },
  };
  