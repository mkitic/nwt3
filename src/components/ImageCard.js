import React, { useState } from 'react'

import emptyHeart from '../assets/emptyHeart.png'
import redHeart from '../assets/redHeart.png'
import {isLiked} from '../helper'
import AuthProtect from './AuthProtect'

const ImageCard=({image})=> {
    const [liked, setLiked] = useState(false)
    /*const likeToggle = ({user, webformatURL: imageUrl, views, downloads, likes, tags}) => {
        fetch(`${process.env.API_URL}/like`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwNzcyNDk5fQ.6dH4RN7YT9UrR3CpfmQXY2r1pboRhuBSvdqMDg1GgYM'
          }
        })
        .then(res=> res.json())
        .then(data=> {
        })
        .catch(err=> console.log(err));
    }*/
    // const tags= image.tags.split(',')
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={image.webformatURL} alt="" className="w-full"/>
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
                <li style={{maxWidth: '42px', cursor: "pointer"}}>
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