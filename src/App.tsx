import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AddEditPage from './features/Photo/pages/AddEdit';
import MainPage from './features/Photo/pages/Main';

// Lazy load
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
    return (
        <div className='photo-app'>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Navigate to='/photos' />} />
                        <Route path='photos' element={<Photo />}>
                            <Route index element={<MainPage />} />
                            <Route path='add' element={<AddEditPage />} />
                            <Route path=':photoId' element={<AddEditPage />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
