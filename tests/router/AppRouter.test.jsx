import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <AppRouter />', () => { 
    
    test('should show the login if it is not authenticated', () => {

        const contextValue = {
            logged: false
        }
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        //expect(screen.getAllByText('Login')).toHaveLength(2);
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('should show the marvel component if it is authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug();

        expect(screen.getByText('Marvel Comics')).toBeTruthy();
        expect(screen.queryByText('Login')).toBeNull();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
 });