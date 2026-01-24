import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className=' flex items-center justify-center text-center bg-gray-600 text-white text-3xl p-4' centre> User: {userid} </div>
  )
}

export default User