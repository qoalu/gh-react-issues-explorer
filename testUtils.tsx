import React, { ReactElement } from 'react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const AllTheProviders: React.ComponentType<{}> = ({ children }) => {
  return (
    <ChakraProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
};

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: AllTheProviders });
};

export { renderWithRouter };
