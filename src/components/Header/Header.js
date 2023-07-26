import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './header.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav className={classes.nav}>
            <div className={classes.navCh}>
                <h1>
                    <span className='bg-warning rounded-3 text-dark fw-bold fs-2'>IMDb</span>
                </h1>
                <div className={classes.navMenu}>
                    <ul className={classes.navUl}>
                        <li>
                            <NavLink className={({isActive})=>isActive?classes.active:undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <Link to={`/movieList/popular`}>Popular</Link>
                        </li>
                        <li>
                            <Link to="/movieList/top_rated">Top Rated</Link>
                        </li>
                        <li>
                            <Link to="/movieList/upcoming">Upcoming</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.account}>
                    <AccountCircleIcon sx={{
                        fontSize: 40,
                    }} />
                </div>
            </div>
        </nav>
    </header>
  )
}
