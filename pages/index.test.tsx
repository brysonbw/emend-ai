import { render, screen } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom';

describe('<Home />', () => {
  it('renders <Home /> component', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
