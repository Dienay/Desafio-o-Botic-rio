import React, { useEffect, useState } from 'react';
import ListContext from './Contexts/ListContext';
import Router from './Router/Router'
import * as data from './data.json'

function App() {
  const [listContext, setListContext] = useState([])

  useEffect(()=> {
    getList()
  },[listContext])

  const getList = async () => {
      try {
        setListContext(data.default)
      } catch (error) {
          console.log(error, "Erro")
      }
  }

  return (
    <ListContext.Provider
      value={{listContext: listContext, setListContext: setListContext}}
    >
      <Router />
    </ListContext.Provider>
  );
}

export default App;
