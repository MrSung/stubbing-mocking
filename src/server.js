import musicians from './data/musicians';

const loadMirage = () => import('miragejs');

export function loadMirageInDev() {
  if (process.env.NODE_ENV !== 'development') return;

  loadMirage().then(
    ({ Server }) =>
      new Server({
        routes() {
          this.namespace = 'api';

          this.get('/musicians/blues/', () => musicians.blues);

          this.get('/musicians/rock/', () => musicians.rock);
        },
      })
  );
}
