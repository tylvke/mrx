import { createModel } from '../../mrx';
import API from '../../api/user';

// 简化前
// export default {
//   state: {
//     detail:{
//       username: "",
//     }
//   },
//   effects:{
//     async fetDetail({payload},{ put }){
//       const res = await API.getDetail(payload);
//       put('save',{
//         payload: res,
//       });
//     },
//     async add(){
//       const res= await API.delete();
//       return res;
//     },
//     async delete(){
//       const res= await API.delete();
//       return res;
//     },
//     async edit(){
//       const res= await API.edit();
//       return res;
//     },
//   },
//   reducers:{
//     save(state, { payload }) {
//       return {
//         ...state,
//         detail: payload,
//       };
//     },
//   }
// }

// 简化后
export default createModel(API, {
  state: {
    detail:{
      username: "",
    }
  },
})
