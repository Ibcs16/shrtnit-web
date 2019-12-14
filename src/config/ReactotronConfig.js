import Reactrotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactrotron.configure().connect();

  tron.clear();

  console.log = tron;
}
