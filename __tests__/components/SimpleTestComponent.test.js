import { fireEvent, render } from '@testing-library/react';

import React from 'react';
import { Router } from 'react-router-dom';
import SimpleTestComponent from '~/components/SimpleTestComponent';
import { createMemoryHistory } from 'history';

describe('Test component', () => {
  it('should be able to add new item', () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <SimpleTestComponent />
    );

    fireEvent.change(getByTestId('testInput'), {
      target: { value: 'Test.js' },
    });

    fireEvent.submit(getByTestId('testForm'));

    expect(getByTestId('test-list')).toContainElement(getByText('Test.js'));
    expect(getByTestId('testInput')).toHaveValue('');
  });
});
