import type { LoaderFunction } from "react-router";
import type {
  AppData,
  IApplicationData,
  IFooter,
  IHomepage,
  ILanguageData,
  INavigation,
  IServiceData,
  IUniversityApplicationData,
} from "./interface";

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
export const appDataLoader: LoaderFunction = async (): Promise<AppData> => {
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
    } as AppData;
  } catch (error) {
    console.error("Error fetching app data:", error);
    // Return default data as fallback
    return {
      languages: DEFAULT_LANGUAGES,
      navigations: DEFAULT_NAVIGATION,
      footerData: DEFAULT_FOOTER,
    } as AppData;
  }
};
