import expect from 'expect';
import reducers from '../../reducers';

describe('reducers', () => {
  it('should handle actions', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({ users: [], currentUser: null, loginForm: { username: '', password: '' } });
  });
});
