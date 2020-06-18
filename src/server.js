import { Server } from 'miragejs';

// eslint-disable-next-line no-unused-vars
const server = new Server({
  routes() {
    this.namespace = 'api';

    this.get('/users/', () => [
      { name: 'Angy', surname: 'T.' },
      { name: 'Chris', surname: 'B.' },
      { name: 'Juliana', surname: 'Crain' },
    ]);
  },
});
