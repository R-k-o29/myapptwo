import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Increment from './demoTest';

test('Increments count on button click', () => {
    render(<Increment/>);
    expect(screen.getByText('Value: 0')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Value: 1')).toBeInTheDocument();
});