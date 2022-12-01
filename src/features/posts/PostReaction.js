import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const PostReaction = ({post}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <span onClick={()=>dispatch(reactionAdded())}>T</span> 
        <span>W</span>
        <span>H</span>
        <span>R</span>
        <span>C</span>
    </div>
  )
}

export default PostReaction