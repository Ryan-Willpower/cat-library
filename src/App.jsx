import React, { useState, useEffect } from 'react'
import Global from './global'
import { Main } from './App.css'
import Axios from 'axios'

function useCat(initState) {
  const [value, setValue] = useState(initState)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    handleChange,
  }
}

function useCatData(value) {
  const [imgurl, setImgUrl] = useState([])
  const [isLoading, setLoading] = useState(false)

  async function fetchCat(value) {
    setLoading(true)
    const { data } = await Axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${value}&api_key=${
        process.env.REACT_APP_CAT_API_KEY
      }`
    )
    setLoading(false)
    setImgUrl(data)
  }

  useEffect(
    function() {
      fetchCat(value)
    },
    [value]
  )

  return {
    imgurl,
    isLoading,
  }
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(function() {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
  }
}

export default () => {
  const { value, handleChange: onChange } = useCat(0)
  const { imgurl, isLoading } = useCatData(value)
  const { width } = useWidth()

  return (
    <Main>
      <h4>Cat App (=‐ω‐=)</h4>
      <div>
        how much? <input value={value} onChange={onChange} />
      </div>
      {!isLoading && imgurl.length > 0 ? (
        <>
          <section>
            {imgurl.map(item => (
              <div key={item.id}>
                <img src={item.url} alt="cat is cute" />
              </div>
            ))}
          </section>
          <p>Width: {width}</p>
        </>
      ) : (
        <div>Snaping some cat...</div>
      )}
      <Global />
    </Main>
  )
}
