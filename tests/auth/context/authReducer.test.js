import { authReducer } from '../../../src/auth/context';
import { types } from "../../../src/auth/types/types";

describe('Test in authReducer', () => {

    test('should return the default state', () => {

        const initialState = {
            logged: false
        }

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('should authenticate and place the user name', () => {

        const initialState = {
            logged: false
        }

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Juan'
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({ logged: true, user : action.payload });

    });

    test('should delete the user name and logged in false', () => {

        const initialState = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan'
            }
        }

        const action = {
            type: types.logout
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({ logged: false });

    });

});
