import createReducer from '../../utils/createReducer';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.UHnffynBjuE3dcwEUyqldVbN-5QzMT-oiyXqkRbWJOI';

const prefix = 'TOKEN'

const ADD = `${prefix}/ADD`
const DEL = `${prefix}/DEL`

export default createReducer({
  isAuth: false
}, {
  [ADD]: (state, { payload }) => ({
    payload
    // set token in local storage
  })
});
