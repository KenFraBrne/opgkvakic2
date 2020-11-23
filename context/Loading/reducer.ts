import * as types from './types'

interface Action {
  type: string;
}

export default function reducer( state: boolean, action: Action ){
  const { type } = action
  switch(type){
    case(types.SET_TRUE): return true
    case(types.SET_FALSE): return false
    default: return state
  }
}
