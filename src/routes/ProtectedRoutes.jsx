import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ProtectedRoute() {
    const currentUser = useSelector(state => state.users.currentUser)
    if (currentUser) {
        return (
            <>
                <Outlet />
            </>
        )
    } else {
        return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute;