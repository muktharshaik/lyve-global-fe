import { render } from '@testing-library/react';

import RestaurantDetailsForm from './RestaurantDetailsForm';

describe('RestaurantDetailsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RestaurantDetailsForm />);
    expect(baseElement).toBeTruthy();
  });
});
