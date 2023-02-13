import { IS_SERVER } from '@/config/constants';

const initializeMocks = async () => {
  if (IS_SERVER) {
    const { server } = await require('./server');
    server.listen();
  } else {
    const { worker } = await require('./browser');
    worker.start();
  }
};

initializeMocks();

export {};
