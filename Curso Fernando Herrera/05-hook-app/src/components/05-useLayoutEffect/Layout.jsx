import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Quote } from './Quote'
import { LoadingQuote } from './LoadingQuote'

const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote } = !!data && data[0]
  // Otra forma de realizarlo
  // const { author, quote } = (!!data && data[0] !== undefined) ? (data[0]) : ({});

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr/>

      {
        loading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }

      <button
        className='btn btn-primary'
        onClick={ () => increment() }
      >
                Siguiente quote
      </button>

    </div>
  )
}

export default Layout
