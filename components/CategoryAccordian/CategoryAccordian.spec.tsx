import { render } from '@testing-library/react';

import CategoryAccordian from './CategoryAccordian';

describe('CategoryAccordian', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryAccordian />);
    expect(baseElement).toBeTruthy();
  });
});
