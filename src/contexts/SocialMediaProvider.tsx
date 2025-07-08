import type { ISocialMediaLinks } from "../utilities/interface";
import { SocialMediaContext } from "./SocialMediaContext";

export const SocialMediaProvider: React.FC<{
  links: ISocialMediaLinks;
  children: React.ReactNode;
}> = ({ links, children }) => (
  <SocialMediaContext value={links}>
    {children}
  </SocialMediaContext>
);
