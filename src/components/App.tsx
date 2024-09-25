import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet } from 'react-router-dom';
import About from "@/pages/about/About";
import duckPng from "@/assets/duck.png";
import fallJpg from "@/assets/fall.jpg";
import LeaveSvg from "@/assets/leave.svg";

// function TODO() {
//     TODO2()
// }

// function TODO2() {
//     throw new Error();
// }

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1)
        // TODO();
    }

    // if (__PLATFORM__ === 'desktop') {
    //     return (
    //         <div>ISDESKTOPPLATFORM
    //         </div>
    //     )
    // }
    // if (__PLATFORM__ === 'mobile') {
    //     return (
    //         <div>ISMOBILEPLATFORM
    //         </div>
    //     )
    // }
    // if (__ENV__ ==='development') {
    //     //some dev stuff
    // }

    return (
    <div>
        <h1>PLATFORM={__PLATFORM__}</h1>
        <div>
            <img width={200} src={fallJpg} alt="fall" />
            <img width={50} src={duckPng} alt="duck" />    
        </div>
        <div>
            <LeaveSvg color={'red'} width={200}/>
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
