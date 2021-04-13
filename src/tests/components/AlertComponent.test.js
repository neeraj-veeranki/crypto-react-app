import React from "react";
import { render, screen } from '@testing-library/react';
import AlertComponent from "../../components/Alert";

test('renders learn react link', () => {
    const props = {
        errorMessage: 'this is error',
        errorType: 'error'
    }
    render(<AlertComponent {...props} />);
    const linkElement = screen.getByText(/this is error/i);
    expect(linkElement).toBeInTheDocument();
  });