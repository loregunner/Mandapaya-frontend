"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { useEffect, useState } from "react";

persistStore(store); // persist the store

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return <> {domLoaded && <Provider store={store}>{children}</Provider>}</>;
}
