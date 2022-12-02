import React from 'react'
import PostAuthor from './PostAuthor'
import PostReaction from './PostReaction'
import TimeAgo from './TimeAgo'

const PostExcerpt = ({post}) => {
  return (
    <div
      className="border-2 rounded-tl-3xl rounded-br-3xl rounded border-gray-500 mb-5 p-5 text-white bg-gray-600"

    >
      <h3 className="font-bold font-mono">{post.title}</h3>
      <p className="text-justify">{post.body}</p>
      <div className="flex justify-start mt-2">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamps={post.date} />
      </div>
      <PostReaction post={post} />
    </div>
  )
}

export default PostExcerpt