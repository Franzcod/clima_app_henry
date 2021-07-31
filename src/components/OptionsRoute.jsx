


import React from 'react';
import styles from './OptionsRoute.module.css';
import { Link } from 'react-router-dom';


export default function OptionsRoute() {
    return <div className={styles.cont}>
                <Link to='/'> <p>Home</p> </Link>
                <Link to='/about'> <p>About</p> </Link>
            </div>

}


