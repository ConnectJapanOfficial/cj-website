import ComingSoon from "../components/ComingSoon/ComingSoon";
import { usePageTitle } from "../utilities/hooks";

const Schools = () => {

    usePageTitle("Schools");

    return (
        <div>
            <ComingSoon/>
        </div>
    );
};

export default Schools;