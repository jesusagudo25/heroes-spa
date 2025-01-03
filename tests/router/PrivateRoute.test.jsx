import { AuthContext } from "../../src/auth";
import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Test in <PrivateRoute/>', () => { 
    
    test('should show the component if the user is authenticated', () => {

        //Esto es para simular el localStorage.setItem
        //No puede ser el localStorage real, porque no se puede modificar en un test.
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute >
                        <span>Test in PrivateRoute</span>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText('Test in PrivateRoute')).toBeTruthy();

        //Con esto verificamos que se haya llamado al localStorage.setItem, con los parametros que esperamos...
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
 });