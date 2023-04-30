import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner text-primary">
        <div className="spinner-border" role="status">
        <span className="sr-only visually-hidden">Loading...</span>
        </div>
            
    </div>
  )
}

export default Spinner
