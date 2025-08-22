import React from 'react'
import { Route, Routes } from 'react-router'
import UploadPost from './components/UploadPost'
import ViewPosts from './components/ViewPosts'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<UploadPost />} />
      <Route path="/posts" element={<ViewPosts />} />
    </Routes>
    </>
    
  )
}

export default App