import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { Header } from '../components/Header';
import { Home } from './Home';
import { Users } from './Users';

describe('Testing page Home', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
        <Home />
        <Users />
      </BrowserRouter>
    );
  });
  it('Should be able to render components header', () => {
    const logo01 = screen.getByTestId('logo01');
    const logo02 = screen.getByTestId('logo02');
    const linkHome = screen.getByText(/Home/i);
    const linkUsers = screen.getByText(/Users/i);

    expect(linkHome).toBeInTheDocument();
    expect(linkUsers).toBeInTheDocument();
    expect(logo01).toHaveTextContent(/dev/i);
    expect(logo02).toHaveTextContent(/.blog/i);
  });

  it('Should be able to render components Home', () => {
    const mainTitle = screen.getByText(/News about the/i);
    const img = screen.getByAltText(/a woman in a yellow shirt/i);
    expect(mainTitle).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
  it('Should render a list with 10 components', async () => {
    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
  });
  it('Should be able to fire event in navigate links', () => {
    const linkUsers = screen.getByText(/Users/i);
    fireEvent.click(linkUsers);
    expect(screen.getByText(/User List:/i));
  });
});
