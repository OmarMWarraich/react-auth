import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routs = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<UserInfoPage />} />
            </Routes>
        </Router>
    );
}