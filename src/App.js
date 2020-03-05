import React from 'react';
import InputModule from './modules/inputModule'
import OutputModule from './modules/outputModule'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import Appreducer from './reducer.js'

let store = createStore(
  Appreducer,
  applyMiddleware(thunk)
  // applyMiddleware(thunk,logger)    
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <InputModule/>
          <hr/>
          <OutputModule/>
        </div>
      </Provider>
    )
  }
}


