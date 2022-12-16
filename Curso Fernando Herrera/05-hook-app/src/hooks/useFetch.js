import React, { useEffect, useRef, useState } from 'react'

// Por defecto va a tener un estado
const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loagind: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          })
        }
      })
  }, [url])

  // En este caso solo estoy retornando el objeto del state
  return state
}

export default useFetch
