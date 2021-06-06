import { render, screen } from '@testing-library/react';

import Portfolio from '.';

describe('<Portfolio />', () => {
  it('should render the heading', () => {
    const { container } = render(<Portfolio />)

    expect(screen.getByRole('heading', { name: /Portfolio/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  });
});
