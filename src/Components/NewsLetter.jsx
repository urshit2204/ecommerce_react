import React from 'react'
import '../Components/newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe To Our Newsletter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
