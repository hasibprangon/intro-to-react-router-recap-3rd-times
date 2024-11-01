import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Default = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p>:

            <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Default;