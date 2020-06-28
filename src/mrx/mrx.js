import { createStore, applyMiddleware, combineReducers } from "redux";

const modules = {};

// 构造reducer
function createReducer(data) {
  return function (state = data, { type, payload, reducers }) {
    return reducers && reducers[type] ? reducers[type](state, payload) : state;
  };
}

// 处理model
function handleModels(models) {
  for (const key in models) {
    const model = models[key];
    const effects = {};
    const reducers = {};
    for (const key1 in model.effects) {
      effects[`${key}/${key1}`] = model.effects[key1];
    }
    for (const key2 in model.reducers) {
      reducers[`${key}/${key2}`] = model.reducers[key2];
    }
    model.effects = effects;
    model.reducers = reducers;
    modules[key] = createReducer(model.state);
  }
}

// 异步中间件
function reduxPromise(models) {
  return ({ dispatch, getState }) => (next) => (action) => {
    const modelKey = action.type.split("/")[0];
    const model = models[modelKey];
    const put = function (type, payload) {
      dispatch({
        type: `${modelKey}/${type}`,
        payload,
        reducers: model.reducers,
      });
    };
    if (model.effects[action.type]) {
      // return的为action是promise，dispatch后可以使用async await获取数据执行后续操作
      return model.effects[action.type](action, { put, getState });
    } else {
      action.reducers = model.reducers;
      return next(action);
    }
  };
}
function mrx(models) {
  handleModels(models);
  const reducer = combineReducers({
    ...modules,
  });
  return createStore(reducer, applyMiddleware(reduxPromise(models)));
}

export default mrx;
