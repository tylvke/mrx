const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => s.toUpperCase());
};

const createModel = ({
  namespace,
  state = {},
  effects = {},
  reducers = {},
}) => {
  const API = require(`../api/${namespace}`).default;
  const originState = Object.assign({},state);
  return {
    state: {
      ...state,
    },
    effects: {
      async fetch({ payload, dataType }, { put, getState }) {
        try {
          const res = await API[`get${firstUpperCase(dataType)}`](payload);
          put("save", {
            dataType,
            payload: res.data,
          });
          return res.data;
        } catch (err) {
          throw err;
        }
      },
      async handle({ payload, action }) {
        try {
          const res = await API[action](payload);
          return res;
        } catch (err) {
          throw err;
        }
      },
      ...effects,
    },
    reducers: {
      save(state, { payload, dataType }) {
        state[dataType] = payload;
        return {
          ...state,
        };
      },
      clear(){
        return{
          ...originState,
        }
      },
      ...reducers,
    },
  };
};
export default createModel;