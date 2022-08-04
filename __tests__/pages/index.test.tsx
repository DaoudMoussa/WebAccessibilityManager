import HomePage from '@pages/index';
import variables from '@styles/variables.module.scss';
import { getRoles, render, screen, waitFor } from '@utils/testWrapper';
import userEvent from '@testing-library/user-event';

console.log(variables);

describe('HomePage', () => {

  it('Should display data', async () => {
    render(<HomePage />);

    const inputText: HTMLInputElement = screen.getByRole('textbox') 
    await userEvent.type(inputText, 'https://www.google.com')

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton)

    await waitFor(async () => expect(await screen.findByRole('list')).toBeInTheDocument(), {
      timeout: 20000
    });
  });

  it('should display an error', async () => {
    render(<HomePage />);

    const inputText: HTMLInputElement = screen.getByRole('textbox') 
    await userEvent.type(inputText, 'string non url')

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton)

    await waitFor(async () => expect(await screen.findByText(/errore/i)).toBeInTheDocument(), {
      timeout: 20000
    });
  })
});
