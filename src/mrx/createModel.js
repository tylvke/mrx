const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => s.toUpperCase());
};

const createModel = (API={}, {
  state = {},
  effects = {},
  reducers = {},
}) => {
  const originState = Object.assign({},state);
  return {
    state: {
      ...state,
    },
    effects: {
      async fetch({ payload, dataType }, { put, getState }) {
        try {
          const effect = API[`get${firstUpperCase(dataType)}`];
          if(!effect)return;
          const res = await effect(payload);
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
          const effect = API[action];
          if(!effect) return;
          const res = await effect(payload);
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