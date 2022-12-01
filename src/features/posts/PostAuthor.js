import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const user = users.find(user => user.id = userId)
  return (
    <div>
        <p>Posted By: me</p>
    </div>
  )
}

export default PostAuthor