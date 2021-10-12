import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  bids: {},
  asks: {},
};

const reducer = createReducer(initialState, {
  patchLevels(state, action) {
    function update(type, messages) {
      for (const [price, size] of messages) {
        state[type][price] = size;

        if (size === 0) {
          delete state[type][price];
        }
      }
    }

    update("bids", action.payload.bids);
    update("asks", action.payload.asks);
  },
});

export default reducer;
