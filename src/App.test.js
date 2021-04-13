import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import App from './App';

afterEach(cleanup)
test('enables button after selecting an option in dropdown', async() => {
  // Render your main component, pass the props you need
  const { getByTestId, getByDisplayValue } = render(<App />)
  expect(getByTestId('submit-btn')).toBeDisabled();
  fireEvent.change(getByDisplayValue(/Select Cryptocurrency/i), {
    target: { value: "BTC" }
  });
  await waitFor(() => expect(getByTestId('submit-btn')).toBeEnabled())
});

test('calls the mock function when button is clicked', async() => {
  // First mock fetch so that it returns what you want
  const fetchMock =  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
        'rates' : {
          'USD': '123.789'
        }
    })
  });
  // Render your main component, pass the props you need
  const { getByTestId, getByDisplayValue } = render(<App />)
  // Click the button or do whaterver a user would do
  fireEvent.change(getByDisplayValue(/Select Cryptocurrency/i), {
    target: { value: "BTC" }
  });
  await waitFor(() => expect(getByTestId('submit-btn')).toBeEnabled())
  fireEvent.click(getByTestId('submit-btn'))
  // At this point wait for the fetches to execute
  // somthing will change in your app: test that something
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
  // Make sure you reset the mock or fetch won't work
  // for other tests
  fetchMock.mockRestore()
});

test('shows currency quotes on successful response', async() => {
  const fetchMock =  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
        'rates' : {
          'USD': '123.789'
        }
    })
  });
  const { getByTestId, getByText, getByDisplayValue } = render(<App />)
  fireEvent.change(getByDisplayValue(/Select Cryptocurrency/i), {
    target: { value: "BTC" }
  });
  await waitFor(() => expect(getByTestId('submit-btn')).toBeEnabled())
  fireEvent.click(getByTestId('submit-btn'))
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
  expect(getByText(/CurrencyCode/i)).toBeVisible();
  fetchMock.mockRestore()
});

test('displays error if data receives error', async() => {
  const fetchMock =  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
        'error' : 'error'
    })
  });
  const { getByTestId, getByDisplayValue, getByText } = render(<App />)
  fireEvent.change(getByDisplayValue(/Select Cryptocurrency/i), {
    target: { value: "BNB" }
  });
  await waitFor(() => expect(getByTestId('submit-btn')).toBeEnabled())
  fireEvent.click(getByTestId('submit-btn'))
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
  expect(getByText(/Currency conversion for this currency is not available now./i)).toBeVisible();
  fetchMock.mockRestore()
});

