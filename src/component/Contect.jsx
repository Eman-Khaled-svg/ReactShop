import React from 'react'

function Contect() {
  return (
    <>
      <div className="container my-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="
Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </form>
        </div>
    
    
    
    </>
  )
}

export default Contect