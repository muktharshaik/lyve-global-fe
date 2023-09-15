import { render } from '@testing-library/react';

import CategoryDetailsForm from './CategoryDetailsForm';

describe('CategoryDetailsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryDetailsForm />);
    expect(baseElement).toBeTruthy();
  });
});
