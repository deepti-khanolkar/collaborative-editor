import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

function App () {
  useEffect(() => {
      dispatch(fetchData())
  },'')

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
