import React, { useState } from 'react'

import emptyHeart from '../assets/emptyHeart.png'
import redHeart from '../assets/redHeart.png'
import AuthProtect from './AuthProtect'
import {api} from '../helper'
import { writeStorage, useLocalStorage } from '@rehooks/local-storage'

const ImageCard=({image, local, onChange})=> {
    const [likes] = useLocalStorage('currentlyLiked')
    const [liked, setLiked] = useState(local ? true : likes?.find(el => el.id === image.id))

    const likeToggle = ({id, user, webformatURL: imageUrl, views, downloads, likes, tags}) => {
      api.post('like', {id, user, imageUrl, views, downloads, likes, tags}, true).then(res => {
        writeStorage('currentlyLiked', res.data)
        setLiked(!liked)
        if (local) {
          onChange(Math.random())
        }
      })
    }
    // const tags= image.tags.split(',')
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image.webformatURL || image.imageUrl} alt="" className="w-full"/>
          <div className="px-6 py-4">
              <div className="font-bold text-purple-500 text-xl mb-2">
                  Photo by {image.user}
              </div>
              <ul>
                <li>
                  <strong> Views: </strong>
                  {image.views}
                </li>
                <li>
                  <strong> Download: </strong>
                  {image.downloads}
                </li>
                <li>
                  <strong> Likes: </strong>
                  {image.likes}
                </li>
                <AuthProtect alternative={null}>
                  <li style={{maxWidth: '42px', cursor: "pointer"}} onClick={() => likeToggle(image)}>
                    {liked ? <img src={redHeart} alt=""/> : <img src={emptyHeart} alt="" />}
                  </li>
                </AuthProtect>
              </ul>
          </div>
          {/*<div className="px-6.py-4">
            {tags.map((tag, index)=>(
                <span  key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag}
              </span>
            ))}

            </div>*/}
    </div>
    )

}

export default ImageCard;