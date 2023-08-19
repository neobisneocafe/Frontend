import { createAdminApp } from './adminApp/appEntry';
import { createBaristaApp } from './baristaApp/appEntry';
import './index.css';

const createApp = (isAdminApp) => {
  if (isAdminApp) {
    createAdminApp();
  } else {
    createBaristaApp();
  }
};

createApp(false);

export { createApp };
