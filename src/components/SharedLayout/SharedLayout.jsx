import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react";
import css from "components/SharedLayout/SharedLayout.module.css"

const SharedLayout = () => {
    return (<>
        
                <div className={css.container}>
                    <nav>
                        <NavLink to="/" className={({ isActive }) => (isActive ? css.active : css.inactive)}>Home</NavLink>
                        <NavLink to="/movies" className={({ isActive }) => (isActive ? css.active : css.inactive)}>Movies</NavLink>
                    </nav>
                </div>
        
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        
    </>)
}

export default SharedLayout;