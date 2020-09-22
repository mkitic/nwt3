import React, { useState } from 'react'

import Header from '../../components/Header'
import ImageContainer from '../../components/ImageContainer'

const Home = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <ImageContainer useAuth={false} search={setQuery} url={`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`} />
    </>
  )
}

export default Home