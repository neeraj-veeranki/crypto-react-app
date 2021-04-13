import React from "react";
import CurrencyList from "../../components/CurrencyList";
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup)
test('shows data received from props', async() => {
    const props = {
        currencyData: [{
            'currency': 'USD',
            'quote': '123'
        }]
    }
  const { getByText } = render(<CurrencyList {...props}/>)
  expect(getByText(/CurrencyCode/i)).toBeVisible();;
});
