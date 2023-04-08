import './App.css';
import React, { useState, useEffect } from 'react'
import { createISODateString } from './utils';

function App() {
  const [dataState, setDataState] = useState('requesting')
  const [usingOtherDate, setUsingOtherDate] = useState(false)

  const [data, setData] = useState(null)

  async function dataFetchHandle(date){
    try{
      const res = await fetch(
        !date
        ? `http://api.nbp.pl/api/exchangerates/tables/c/today/?format=json`
        : `http://api.nbp.pl/api/exchangerates/tables/c/${date}/?format=json`
      )

      if(res.status === 404){
        setUsingOtherDate(true)

        const d = new Date()
        d.setDate(d.getDate() - 1)

        await dataFetchHandle(createISODateString(d))
        return
      }

      const _data = await res.json()

      setData(Array.isArray(_data) ? _data[0] : _data)
      setDataState('ok')
    } catch(e) {
      console.error(e)
      setDataState('error')
    }
  }

  useEffect(() => {
    dataFetchHandle()
  }, [])
  return <>
    
  </>;
}

export default App;
