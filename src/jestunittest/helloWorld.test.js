import '@testing-library/jest-dom';
import HelloWorld from './helloWorld';
import { screen,render } from '@testing-library/react';

test(
    'Prints Hello World',()=>{
        render(<HelloWorld/>);
        const headingElement= screen.getByText(/Hello, World!/i);
        expect(headingElement).toBeInTheDocument();
    }
);
