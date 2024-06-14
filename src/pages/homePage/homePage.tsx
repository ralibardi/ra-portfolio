import React, { lazy, useState } from 'react';
import reactLogo from '@assets/react.svg';
import viteLogo from '@public/vite.svg';
import './homePage.scss';

const PrimaryButton = lazy(() => import('@components/primaryButton'));

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <PrimaryButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </PrimaryButton>
        <p>
          Edit <code>src/HomePage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default HomePage;
