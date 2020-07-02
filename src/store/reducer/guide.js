import { createModel } from '../../mrx';
import API from '../../api/guide';

export default createModel(API, {
  state: {
    guideState:{}
  },
})
