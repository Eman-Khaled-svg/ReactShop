import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const containerStyle={
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'70vh',

    }
    const style={
        marginTop:'50px',
        marginBottom:'30px',
        fontWeight:'bold',
        textAlign:'center',
    }
    const p={
        textAlign:'center',
        marginBottom:'30px',
        fontSize:'20px',
    }
    const btn={
        margin:'0 auto',
        padding:'10px 30px',
        fontSize:'18px',
        fontWeight:'bold',
        borderRadius:'5px',
        textDecoration:'none',

    }
  return (
    <>
    <div className="container" style={containerStyle}>
        <h2 className="my-5" style={style}> Welcome to FakeStore</h2>
        <p style={p} className='text-muted'>
          Discover a wide range of products at unbeatable prices. Shop now and experience the best online shopping experience!
        </p>
        <Link to="/products" className="btn btn-primary" style={btn}>Shop Now</Link>
    </div>
    
    
    
    </>
  )
}

export default Home