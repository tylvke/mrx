import { createModel } from '../../mrx';
import API from '../../api/tag';

export default createModel(API, {
  state: {
    tagInfo:{}
  },
})
