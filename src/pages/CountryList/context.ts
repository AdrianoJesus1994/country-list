import { createContext } from "react";

interface CountryContext {
  onSearch: (query: string) => void;
  onCancel: () => void;
}

const context = createContext<CountryContext>({
  onSearch: () => {},
  onCancel: () => {},
});

export default context;
