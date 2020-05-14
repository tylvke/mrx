import models from "./reducer";
import mrx, { modelWrapper } from '../mrx';
// 统一逻辑
for (const key in models) {
    models[key] = modelWrapper(models[key]);
  }
export default mrx(models);
