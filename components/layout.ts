import React from 'react';
import Navbar from './Navbar';
import { useAppStore } from '../lib/store';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useAppStore((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;