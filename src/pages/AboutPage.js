import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='nice desk'/>
      <article>
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus neque non blandit facilisis. Quisque ultricies justo magna, a mollis felis pretium ac. Donec eget lobortis neque. Cras vitae augue molestie, rhoncus elit at, tincidunt ante. Phasellus vitae iaculis neque, in convallis magna. Aenean egestas mauris enim, id consectetur ex pretium eu. Curabitur euismod, purus a vehicula suscipit, turpis risus efficitur lorem, id convallis turpis lacus et metus. Suspendisse tincidunt molestie facilisis. Cras sodales, eros suscipit laoreet iaculis, mauris urna posuere velit, blandit condimentum tortor magna vitae nisi. Aliquam erat volutpat.</p>
      </article>

    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
