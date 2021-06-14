import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import IssueDetails from './IssueDetails';
import { MockedProvider } from '@apollo/client/testing';
import { renderWithRouter } from '../../../../testUtils';
import { mock } from '../../../api/mocks/issueDetails.mock';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Issue Details', () => {
  test('renders without error', () => {
    const route = 'issues/1';
    renderWithRouter(
      <MockedProvider mocks={mock} addTypename={false}>
        <IssueDetails />
      </MockedProvider>,
      { route }
    );

    const linkElement = screen.getByText(/Issue Details/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  test('shows loading', () => {
    const route = 'issues/1';
    renderWithRouter(
      <MockedProvider mocks={mock} addTypename={false}>
        <IssueDetails />
      </MockedProvider>,
      { route }
    );

    expect(screen.getByText(/Loading data/i)).toBeInTheDocument();
  });

  test('shows entry with title when loaded', async () => {
    const route = 'issues/1';

    renderWithRouter(
      <MockedProvider mocks={mock} addTypename={false}>
        <MemoryRouter initialEntries={['issues/1']}>
          <Route path='issues/:id'>
            <IssueDetails />
          </Route>
        </MemoryRouter>
      </MockedProvider>,
      { route }
    );

    await waitFor(() =>
      expect(
        screen.getByText(/Bug: Focus shift on click is delayed\/laggy/i)
      ).toBeInTheDocument()
    );
  });

  test('shows a link to detail page', async () => {
    const route = 'issues/1';

    renderWithRouter(
      <MockedProvider mocks={mock} addTypename={false}>
        <MemoryRouter initialEntries={['issues/1']}>
          <Route path='issues/:id'>
            <IssueDetails />
          </Route>
        </MemoryRouter>
      </MockedProvider>,
      { route }
    );

    await waitFor(() => {
      expect(screen.getByText(/View issue here/i)).toBeInTheDocument();

      expect(screen.getByText(/View issue here/i)).toHaveAttribute(
        'href',
        '/issues/1'
      );
    });
  });
});
