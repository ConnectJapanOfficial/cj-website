import ComingSoon from "../components/ComingSoon/ComingSoon";
import { usePageTitle } from "../utilities/hooks";

const Guides = () => {

    usePageTitle("Guides");
    
    return (
        <div>
            <ComingSoon/>
        </div>
    );
};

export default Guides;