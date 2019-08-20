import './assets/scss';
import './assets/js';
import store from './store';

window.store = store;

const renderBreed = () => {
  document.getElementById(
    'breedText'
  ).innerHTML = store.getState().wooferReducer.breed;
};

const renderAsyncData = () => {
  const { data } = store.getState().dataReducer;
  document.getElementById('dataText').innerHTML = data.map(d => d.title);
};

store.subscribe(renderBreed);
store.subscribe(renderAsyncData);
renderBreed();
renderAsyncData();
