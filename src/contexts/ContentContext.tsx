import { createContext, useContext, useState, ReactNode, useCallback } from "react";

const CONTENT_KEY = "saiful-cms-content";
const ADMIN_PASSWORD = "saiful2026";

export interface ContentOverrides {
  [lang: string]: {
    [section: string]: {
      [key: string]: string;
    };
  };
}

interface ContentContextType {
  overrides: ContentOverrides;
  setOverride: (lang: string, section: string, key: string, value: string) => void;
  resetAll: () => void;
  getOverride: (lang: string, section: string, key: string) => string | undefined;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType>({
  overrides: {},
  setOverride: () => {},
  resetAll: () => {},
  getOverride: () => undefined,
  isAdmin: false,
  login: () => false,
  logout: () => {},
});

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [overrides, setOverrides] = useState<ContentOverrides>(() => {
    try {
      const saved = localStorage.getItem(CONTENT_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem("saiful-admin") === "true");

  const setOverride = useCallback((lang: string, section: string, key: string, value: string) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        [lang]: {
          ...(prev[lang] || {}),
          [section]: {
            ...(prev[lang]?.[section] || {}),
            [key]: value,
          },
        },
      };
      localStorage.setItem(CONTENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setOverrides({});
    localStorage.removeItem(CONTENT_KEY);
  }, []);

  const getOverride = useCallback((lang: string, section: string, key: string) => {
    return overrides[lang]?.[section]?.[key];
  }, [overrides]);

  const login = useCallback((password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      sessionStorage.setItem("saiful-admin", "true");
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
    sessionStorage.removeItem("saiful-admin");
  }, []);

  return (
    <ContentContext.Provider value={{ overrides, setOverride, resetAll, getOverride, isAdmin, login, logout }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
