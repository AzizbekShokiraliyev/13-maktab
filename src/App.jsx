import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Main, Images, Announcements } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/images" element={<Images />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </>
  )
}

export default App
