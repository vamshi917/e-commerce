import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
    <h1>Get exclusive offers on your email</h1>
    <p>subscribe to our newsletter and stay updated.</p>
    <div>
        <input type="text" placeholder='Your email id' />
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter