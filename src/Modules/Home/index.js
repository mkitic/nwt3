import React from 'react'

import Header from '../../components/Header'
import ImageContainer from '../../components/ImageContainer'

const Home = () => {
  return (
    <>
      <Header />
      <ImageContainer search url={`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${''}&image_type=photo&pretty=true`} />
    </>
  )
}

export default Home