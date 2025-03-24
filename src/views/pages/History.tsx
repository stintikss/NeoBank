import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderHome from '../../components-module/HeaderHome';

const History: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <HeaderHome />
      </>
    );
};

export default History;