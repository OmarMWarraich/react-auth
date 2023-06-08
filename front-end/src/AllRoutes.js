import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute><UserInfoPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
}