import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';

//Mock de useNavigate
const mockedUseNavigate = jest.fn();

//Con esto simulamos el comportamiento de useNavigate
//requireActual es para que no se pierda la funcionalidad de react-router-dom, como el Link, NavLink, etc.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Test in <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan',
            id: '123'
        },
        login: jest.fn(),
        logout: jest.fn()
    }

    beforeEach(() => { jest.clearAllMocks(); });

    test('should display the name of the user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText('Juan')).toBeTruthy();

    });

    test('should call the logout and {navigation than the user clicks on the logout button}', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        
        //screen.getByText('Logout').click();
        //Con fireEvent.click() se simula un click en un elemento.
        const logoutButton = screen.getByText('Logout');
        fireEvent.click(logoutButton);
        expect(contextValue.logout).toHaveBeenCalled();

        //Con esto verificamos que se haya llamado al useNavigate, con los parametros que esperamos...
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });

    });

});