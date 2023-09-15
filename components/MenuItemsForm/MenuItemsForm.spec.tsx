import { render } from '@testing-library/react';

import MenuItemsForm from './MenuItemsForm';

describe('MenuItemsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuItemsForm />);
    expect(baseElement).toBeTruthy();
  });
});
