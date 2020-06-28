import models from "./reducer";
import mrx, { createModel } from '../mrx';
// 统一逻辑
for (const key in models) {
    models[key] = createModel(models[key]);
  }
export default mrx(models);
