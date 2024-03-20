import React, { useState } from 'react';
// @ts-ignore
import { Link, RouteComponentProps } from 'react-router-dom';

const Home: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
        <h1>Bienvenue sur l'application du siècle !</h1>
            <Link to={"/test"}>test</Link>
        </>
    )
}

export default Home;
