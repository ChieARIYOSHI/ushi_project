import React from 'react';
import rogo from './../img/eat_1.jpg';
import './eat.css';

const Head = () => (
    <div>
        <img src={rogo} className="rogo" width="100%" alt="logo" margin-top="100px 0" />
        <h1 className="subtitle">あなた好みの</h1>
        <h1 className="subtitle">お肉に</h1>
        <h1 className="subtitle">きっと出会える</h1>
    </div>
);

export default Head