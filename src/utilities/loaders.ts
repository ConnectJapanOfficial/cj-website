// Terms of Services loader (returns all translations)
export const termsOfServicesLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/termsofservices.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch terms of services: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching terms of services:", error);
    throw error;
  }
};

import type { LoaderFunction } from "react-router";
import type {
  IAppData,
  IApplicationData,
  ICommunity,
  IFooter,
  IGuideData,
  IHomepage,
  ILanguageData,
  ILanguageProgramData,
  INavigation,
  ISchools,
  IServiceData,
  IUniversityApplicationData,
} from "./interface";

// Privacy Policy loader (returns all translations)
export const privacyPolicyLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/privacypolicy.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch privacy policy: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    throw error;
  }
};

// Schools loader
export const schoolsLoader: LoaderFunction = async (): Promise<ISchools> => {
  try {
    const response = await fetch("/schools.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch schools: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching schools:", error);
    throw error;
  }
};

import {
  DEFAULT_FOOTER,
  DEFAULT_LANGUAGES,
  DEFAULT_NAVIGATION,
} from "./constants";

// Homepage loader
export const homepageLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/homepage.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch homepage data: ${response.status}`);
    }
    const data: IHomepage = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    throw error;
  }
};

// Services loader
export const servicesLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/servicesdetails.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch services data: ${response.status}`);
    }
    const data: IServiceData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services data:", error);
    throw error;
  }
};

// University Application loader
export const universityApplicationLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/universityapplication.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch university application data: ${response.status}`
      );
    }
    const data: IUniversityApplicationData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching university application data:", error);
    throw error;
  }
};

// Community loader
export const communityLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/community.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch community data: ${response.status}`);
    }
    const data: ICommunity = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching community data:", error);
    throw error;
  }
};

// Application loader
export const applicationLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/application.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch application data: ${response.status}`);
    }
    const data: IApplicationData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching application data:", error);
    throw error;
  }
};

// App data loader (for shared data like languages, navigation, footer)
export const appDataLoader: LoaderFunction = async (): Promise<IAppData> => {
  try {
    const [languagesResponse, navigationResponse, footerResponse] =
      await Promise.all([
        fetch("/languages.json"),
        fetch("/navigations.json"),
        fetch("/footer.json"),
      ]);

    if (!languagesResponse.ok || !navigationResponse.ok || !footerResponse.ok) {
      throw new Error("Failed to fetch app data");
    }

    const [languages, navigations, footerData] = await Promise.all([
      languagesResponse.json() as Promise<ILanguageData[]>,
      navigationResponse.json() as Promise<INavigation>,
      footerResponse.json() as Promise<IFooter>,
    ]);

    return {
      languages,
      navigations,
      footerData,
    } as IAppData;
  } catch (error) {
    console.error("Error fetching app data:", error);
    // Return default data as fallback
    return {
      languages: DEFAULT_LANGUAGES,
      navigations: DEFAULT_NAVIGATION,
      footerData: DEFAULT_FOOTER,
    } as IAppData;
  }
};

// Language Program loader
export const languageProgramLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/languageprogram.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch language program data: ${response.status}`
      );
    }
    const data: ILanguageProgramData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching language program data:", error);
    throw error;
  }
};

// Guide loader
export const guideLoader: LoaderFunction = async (): Promise<IGuideData> => {
  try {
    const response = await fetch("/guide.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch guide data: ${response.status}`);
    }
    const data: IGuideData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching guide data:", error);
    throw error;
  }
};
