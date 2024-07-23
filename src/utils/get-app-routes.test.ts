import { getAppRoutes } from './get-app-routes';

describe('getAppRoutes', () => {
  it('should return an array of routes', () => {
    const routes = getAppRoutes;
    expect(Array.isArray(routes)).toBe(true);
    expect(routes.length).toBeGreaterThan(0);
  });

  it('should have the correct properties for each route', () => {
    const routes = getAppRoutes;
    routes.forEach((route) => {
      expect(route).toHaveProperty('path');
      expect(route).toHaveProperty('index');
      expect(route).toHaveProperty('component');
      expect(route).toHaveProperty('label');
      expect(route).toHaveProperty('icon');
      if (route.enabled !== undefined) {
        expect(route).toHaveProperty('enabled');
      }
    });
  });

  it('should have unique paths for each route', () => {
    const routes = getAppRoutes;
    const paths = routes.map((route) => route.path);
    const uniquePaths = new Set(paths);
    expect(uniquePaths.size).toBe(paths.length);
  });

  it('should have unique labels for each route', () => {
    const routes = getAppRoutes;
    const labels = routes.map((route) => route.label);
    const uniqueLabels = new Set(labels);
    expect(uniqueLabels.size).toBe(labels.length);
  });
});
