import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import GoToAnalyticsModal from '~/components/GoToAnalyticsModal';

const apiMock = new MockAdapter(api);

describe('Should redirect to analytics page', () => {
  it('should be able to add new tech', () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <GoToAnalyticsModal />
    );

    fireEvent.change(getByTestId('codeUrl'), { target: { value: '123' } });

    fireEvent.submit(getByTestId('goToAnalyticsForm'));
    // debug(); console dom tree at current state
    // simular clicks, submits, hover, etc
    // fireEvent.click(getByText('Adicionar'));

    // debug();

    // expect(getByText('Node.js')).toBeaTruthy();

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('test mock', () => {
    apiMock.onGet('techs').reply(200, ['Node.js']);
  });

  // it('should fail when api returns error', async () => ['Node.js']);
});
