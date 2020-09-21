import React, {useState, useEffect} from 'react';

import ImageCard from '../../components/ImageCard';
import ImageSearch from '../../components/ImageSearch';

const ImageContainer = ({search, url}) => {
  const [images, setImages]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [term, setTerm]= useState('');


  useEffect(()=> {
    fetch(url)
    .then(res=> res.json())
    .then(data=> {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=> console.log(err));

  }, [term, url]);


  return (
    <div className="container mx-auto">
      {/*<header className="App-header">
        <h1 className="font-bold text-purple-500 text-5xl mx-auto mt-20">Mesumi </h1>
      </header>*/}

      {search && <ImageSearch searchText={(text=> setTerm(text))}/>}

      {!isLoading && images.length===0 && <h1 className="text-5xl text-center mx-auto mt-32 mt-32"> NO IMAGES FOUND! </h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32 mt-32"> LOADING </h1>:      
        <div className="grid grid-cols-3 gap-4">
          {images.map(images=> (
            <ImageCard key= {images.id} image={images}/>
          ))}
        </div>}
    </div>
    
  );
}

export default ImageContainer