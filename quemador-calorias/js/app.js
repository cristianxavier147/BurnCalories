const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};
  const getState = () => state;
  const subscribe = (listener) => {
    updater = listener;
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    updater();
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "BURN":
      return parseInt(state + payload);
      break;
    case "PIZZA":
      return parseInt(state + payload);
      break;
    case "SODA":
      return parseInt(state + payload);
      break;
    default:
      return state;
      break;
  }
};

const storeBurn = createStore(reducer, 0);
const storePizza = createStore(reducer, 1360563);
const storeSoda = createStore(reducer, 1360563);

storeBurn.subscribe(() => {
  window.result.textContent = `Por click haz quemado ${storeBurn.getState()} calorias`;
});

storePizza.subscribe(() => {
  window.result.textContent = `Para quemar la Pizza te falta ${storePizza.getState()} calorias`;
});

storeSoda.subscribe(() => {
  window.result.textContent = `Para quemar la Soda te falta ${storeSoda.getState()} calorias`;
});

//evento listener al hacer click
window.burn.addEventListener("click", () => {
  storeBurn.dispatch({
    type: "BURN",
    payload: 1.42,
  });
});

window.pizza.addEventListener("click", () => {
  storePizza.dispatch({
    type: "PIZZA",
    payload: 1.835,
  });
});

window.soda.addEventListener("click", () => {
  storeSoda.dispatch({
    type: "SODA",
    payload: 97,
  });
});
