import React from 'react';
import { createRoot } from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

export const createApp = () => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={appRouter()}/>
    </React.StrictMode>
  );
};