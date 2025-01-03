import { types } from "../../../src/auth/types/types";

describe('Test in Types.js', () => { 
    test('should return an object with the types', () => {
        const typesObject = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        }

        expect(types).toEqual(typesObject)

    })

})