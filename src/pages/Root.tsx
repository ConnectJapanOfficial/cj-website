import { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Bars from '../components/Loaders/Bars';
import NavBar from '../components/Header/NavBar';
import Spinner from '../components/Loaders/Spinner';
import Footer from '../components/Footer/Footer';


const Root = () => {
    const {state} = useNavigation()

    return (
      <Suspense fallback={<Bars />}>
       <NavBar />
        {state === "loading" ? <Spinner /> : <Outlet />}
      <Footer />
      </Suspense>
    );
};

export default Root;