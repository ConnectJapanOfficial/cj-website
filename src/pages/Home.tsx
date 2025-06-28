import { Suspense } from 'react';
import Bars from '../components/Loaders/Bars';
import { usePageTitle } from '../utilities/hooks';


const Home = () => {

    usePageTitle('Home');
    
    return (
        <Suspense fallback={<Bars/>}>
            
        </Suspense>
            
    );
};

export default Home;