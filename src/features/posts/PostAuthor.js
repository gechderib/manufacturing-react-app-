import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const user = users.find(user => user.id.toString() === userId.toString())
  return (
    <div>
        <p className='font-mono'>Posted By: {user&&userId?user.name:"Unknow User"}</p>
    </div>
  )
}

export default PostAuthor