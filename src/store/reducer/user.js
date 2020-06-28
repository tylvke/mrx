import { createModel } from '../../mrx';
import API from '../../api/user';

export default createModel(API, {
  state: {
    detail:{
      username: "",
    }
  },
  effects:{
    async delete(){
      const res= await API.delete();
      return res;
    }
  }
})
