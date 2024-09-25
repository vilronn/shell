import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet } from 'react-router-dom';
import About from "@/pages/about/About";
import duckPng from "@/assets/duck.png";
import fallJpg from "@/assets/fall.jpg";
import LeaveSvg from "@/assets/leave.svg";

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(count + 1);

    return (
    <div>
        <div>
            <img width={200} src={fallJpg} alt="fall" />
            <img width={50} src={duckPng} alt="duck" />
            
        </div>
        <div>
            <LeaveSvg width={200} fill='red'/>
        </div>
        <Link to={'/about'}>about</Link>
        <br/>
        <Link to={'/shop'}>shop</Link>
        <h1 className={classes.value}>{count}</h1>
        <button className={classes.button} onClick={increment}>BUTTON</button>
        <About />

    </div>
    );
}
