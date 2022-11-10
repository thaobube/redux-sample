import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
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
                    <ul>
                        <li>
                            <Link to='/photos'>Go to photo page</Link>
                        </li>
                        <li>
                            <Link to='/photos/add'>Go to Add new photo page</Link>
                        </li>
                        <li>
                            <Link to='/photos/123'>Go to Edit photo page</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path='/' element={<Navigate to='/photos' />} />
                        <Route path='photos' element={<Photo />}>
                            <Route index element={<MainPage />} />
                            <Route path='add' element={<AddEditPage />} />
                            <Route path=':id' element={<AddEditPage />} />
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
