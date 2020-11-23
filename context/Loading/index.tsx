import { createContext, useReducer } from 'react'
import reducer from './reducer'

const initialLoading = true

const LoadingContext = createContext({
  loading: initialLoading,
  loadingDispatch: ({ type: string }) => {},
})

const LoadingProvider = ({ children }) => {
  const [ loading, loadingDispatch ] = useReducer(reducer, initialLoading )
  return (
    <LoadingContext.Provider value={{ loading, loadingDispatch }}>
      { children }
    </LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingProvider }
