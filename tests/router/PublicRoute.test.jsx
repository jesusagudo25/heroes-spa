import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test in <PublicRoute />', () => {

    test('should show the component if the user is not authenticated', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <span>Test</span>
                </PublicRoute>
            </AuthContext.Provider>
        );

        //screen.debug();

        expect(screen.getByText('Test')).toBeTruthy();

    });

    test('should navigate to the component if the user is authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes >
                        <Route path="/login" element={
                            <PublicRoute >
                                <span>Test</span>
                            </PublicRoute>
                        } />
                        <Route path="/" element={<span>Home</span>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.queryByText('Home')).toBeTruthy();

    });

});