import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className="search section">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name"> Search your favourite cocktail </label>
          <input type="text" id="name" ref={searchValue} onChange={() => setSearchTerm(searchValue.current.value)}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
