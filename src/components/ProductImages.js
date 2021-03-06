import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images = [{url:''}]}) => {
  const [main,setMain]=useState(0)
  return (
  <Wrapper>
<<<<<<< HEAD
    <img src={images[main].url} alt='main' className='main' />
=======
    <img src={images[main].url} alt='main image' className='main' />
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
    <div className='gallery'>
      {images.map((image,index)=>{
     return <img src={image.url} alt= {image.filename} key={index} onClick={()=>{setMain(index)}}
     className={image.url===main.url &&'active'}
     />   
      })}
    </div>
  </Wrapper>)
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
