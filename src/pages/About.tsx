import { usePageTitle } from "../utilities/hooks";

const About = () => {

    usePageTitle("About Us");
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to the About Us page!</p>
        </div>
    );
};

export default About;