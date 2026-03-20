import React from 'react'
import toast from 'react-hot-toast'

const Homepage = () => {
  return (
    <>
      <button onClick={() => toast.error("Something went wrong!")}>
        click me
      </button>

      <div>
        Homepage content
      </div>
    </>
  )
}

export default Homepage