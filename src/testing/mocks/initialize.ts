import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

const initializeMocks = async () => {
  if (IS_SERVER) {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start();
  }

  seedDb();
};

initializeMocks();

export {};
