import { createContext } from "react";

import type { ISocialMediaLinks } from "../utilities/interface";

export const SocialMediaContext = createContext<ISocialMediaLinks>({
    facebookPage: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    facebookGroup: "",
} as ISocialMediaLinks);
