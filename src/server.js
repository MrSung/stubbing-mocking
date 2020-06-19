import db from './api/db.json';

const loadMirage = () => import('miragejs');

export function loadMirageInDev() {
  if (process.env.NODE_ENV !== 'development') return;

  loadMirage().then(
    ({ Server }) =>
      new Server({
        routes() {
          this.namespace = 'api';

          this.get('/musicians/blues/', () => db.blues);

          this.get('/musicians/rock/', () => db.rock);
        },
      })
  );
}
