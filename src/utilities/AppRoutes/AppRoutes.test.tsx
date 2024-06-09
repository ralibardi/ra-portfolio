import { render, screen } from '@testing-library/react';
import {AppRoutes} from './index';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('AppRoutes', () => {
  it('should render the HomePage component', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AppRoutes />
      </Router>
    );

    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});