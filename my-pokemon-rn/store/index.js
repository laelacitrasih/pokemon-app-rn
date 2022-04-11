import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pokemons: [],
  pokebag: [],
  pokemonDetail: {},
  next: null,
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'POKEMONS/ADDPOKEMONS':
      return { ...state, pokemons: [...state.pokemons, ...action.payload] }
    case 'POKEMONDETAIL/ADDMOVES':
      return { ...state, pokemonDetail: {...state.pokemonDetail, moves: action.payload} }
    case 'POKEMONDETAIL/ADDTYPES':
      return { ...state, pokemonDetail: {...state.pokemonDetail, types: action.payload} }
    case 'POKEMONDETAIL/SETPOKEMONDETAIL':
      return { ...state, pokemonDetail: {...state.pokemons[action.payload]} }
    case 'POKEBAG/ADDPOKEBAG':
      return { ...state, pokebag: [...state.pokebag, action.payload] }
    case 'POKEBAG/DELETEPOKEBAG':
      return { ...state, pokebag: state.pokebag.filter(e => e.id !== action.payload.id) }
    case 'NEXT/SETNEXT':
      return { ...state, next: action.payload }
    case 'LOADING/SETLOADING':
      return { ...state, loading: action.payload }
    default:
      return JSON.parse(JSON.stringify(state))
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default (store)