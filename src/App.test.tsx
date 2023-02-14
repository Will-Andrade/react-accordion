import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the Accordion component', () => {
    render(<App />);

    const projectTitle = screen.getByTestId('proj-title');
    const accordion = screen.getByTestId('accordion');

    expect(projectTitle).toBeInTheDocument();
    expect(accordion).toBeInTheDocument();
  });
});
