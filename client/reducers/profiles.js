const initialState = {}

const profiles = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_PROFILES':
      return payload
    case 'UPDATE_PROFILES':
      return payload
    default:
      return state
  }
}

export default profiles