import React, {useState, useEffect} from 'react';

import ImageCard from './ImageCard'
import ImageSearch from './ImageSearch'
import {api} from '../../helper'

const ImageContainer = ({search, url, local = false}) => {
  const [images, setImages]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [listChanged, setListChanged] = useState(false)


  useEffect(()=> {
    api.[local ? 'get' : 'rawGet'](url)
    .then(res=> {
      setImages(res[local ? 'data' : 'hits']);
      setIsLoading(false);
    })
    .catch(err=> console.error(err));
  }, [url, listChanged, local]);


  return (
    <div className="container mx-auto">

      {search && <ImageSearch searchText={(text=> search(text))}/>}

      {!isLoading && images.length===0 && <h1 className="text-5xl text-center mx-auto mt-32 mt-32"> NO IMAGES FOUND! </h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32 mt-32"> LOADING </h1>:      
        <div className="grid grid-cols-3 gap-4">
          {images.map(images=> (
            <ImageCard key= {images.id} image={images} local={local} onChange={setListChanged}/>
          ))}
        </div>}
    </div>
    
  );
}

export default ImageContainer