import axios from 'axios'


// Event action types
const GET_EVENTS = 'GET_EVENTS'
const ADD_EVENT = 'ADD_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'
// Filter action types
const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'
const RESET_FILTERS = 'RESET_FILTERS'
// Status action types
const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'

const BASE_URL = "http://api.publicpotluck.com"


// Events actions
export const getEvents = () => (dispatch) => {
  // call api, then dispatch events to redux
  axios.get(BASE_URL + '/events/St. Louis')
    .then(res => {
      console.log('response:', res, 'res.data:', res.data)
      
    })
    .catch(err => {
      console.log('error:', err)
    })
}

export const addEvent = (eventData) => (dispatch) => {
  //axios.post(BASE_URL + '/create/event')
  //  .then(res => {
  //    console.log('res:', res)
  //    dispatch({ type: ADD_EVENT, event: res.data.json().event})
  //  })
  //  .catch(err => {
  //    console.log('error:', err)
  //  })
}
export const deleteEvent = (id) => (dispatch) => {
  //axios.delete(BASE_URL + '/delete/event').then((res) => {}).catch(err => {})
}


// Events reducer
const initialState = {
  events: [],
  filters: [],
  loading: false,
  errors: null
}

export default (
  state=initialState,
  action
) => {
  switch(action) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.events,
        loading: false,
        errors: null
      }
    case ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.event
        ],
        errors: null,
      }
    case UPDATE_EVENT:
      const newEvents = state.events.events.map(event => {
        if(event.id === action.event.id) {
          event = action.event
        }
        return event
      })
      return {
        ...state,
        events: newEvents,
        errors: null
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.id),
        errors: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_ERROR:
      return {
        ...state,
        errors: action.err
      }
    default:
      return state;
  }
}