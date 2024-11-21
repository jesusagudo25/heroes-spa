import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { Dc, Marvel, Hero, Search } from '../pages';

export const HeroesRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />

                    <Route path="search" element={<Search />} />
                    <Route path="hero/:heroId" element={<Hero />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}