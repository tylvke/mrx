export const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => s.toUpperCase());
};

export const modelWrapper = ({
  namespace,
  state = {},
  actions = {},
  reducers = {},
}) => {
  const API = require(`../api/${namespace}`).default;
  return {
    state: {
      ...state,
    },
    actions: {
      async fetch({ payload, dataType }, { commit, getState }) {
        try {
          const res = await API[`get${firstUpperCase(dataType)}`](payload);
          commit("save", {
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
      ...actions,
    },
    reducers: {
      save(state, { payload, dataType }) {
        state[dataType] = payload;
        return {
          ...state,
        };
      },
      ...reducers,
    },
  };
};
