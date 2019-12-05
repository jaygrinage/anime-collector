import React from 'react';
import { Header } from 'modules/components';
import './Main.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div className="mainLayout header">
        <div className="textBox">
          <h1 className="headingPrimary">
            <span className="headingPrimaryMain">Animation</span>
            <span className="headingPrimarySub">is where life happens</span>
          </h1>
        </div>          

        <Header />
        {children}
      </div>
    );
}

export default MainLayout;
