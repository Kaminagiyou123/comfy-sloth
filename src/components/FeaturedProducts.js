import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {products_loading:loading, products_error:error, featured_products:featured}=useProductsContext();
  if (loading){
    return <Loading/>
  } 
  if (error){
   return  <Error/>
  } else{
    return <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'/> 
      </div>
      <div className='section section-center featured'>
        {featured.map((product)=>{
          return (<Product key={product.id} {...product}/>
            
          )
        })}
      </div>
<<<<<<< HEAD
<Link to ='/products' className='btn'> all Product</Link>
    </Wrapper>
  }

=======

    </Wrapper>
  }

  return <h4>featured products</h4>
>>>>>>> f596702c5b8965fef21f554a8355fc244e723dfb
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
