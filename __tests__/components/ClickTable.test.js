import { fireEvent, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';

import TechList from '~/components/TechList';
import api from '~/services/api';

const apiMock = new MockAdapter(api);

describe('TechList component', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <TechList />
    );

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
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
