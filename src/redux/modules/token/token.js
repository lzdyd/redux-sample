import createReducer from '../../utils/createReducer';

const prefix = 'TOKEN'

const ADD = `${prefix}/ADD`
const DEL = `${prefix}/DEL`

export default createReducer({}, {
  [ADD]: (state, { payload }) => ({
    payload
  })
});

