"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./store"; // ✅ 1. Import persistor เข้ามาด้วย
import { PersistGate } from 'redux-persist/integration/react'; // ✅ 2. Import PersistGate

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}