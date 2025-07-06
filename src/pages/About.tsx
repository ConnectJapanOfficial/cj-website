import ComingSoon from "../components/ComingSoon/ComingSoon";
import { usePageTitle } from "../utilities/hooks";

const About = () => {

    usePageTitle("About Us");
    return (
        <div>
        <ComingSoon />
        </div>
    );
};

export default About;