import React from "react";

import {render, screen} from '@utils/test';
import HomePage from '@pages/index';

describe('HomePage', () => {

  it('Should render the homepage', () => {
    render(<HomePage />);

    const heading = screen.getByText(/homepage/i);

    return expect(heading).toBeInTheDocument();
  })
})