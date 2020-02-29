import React from 'react';
import ItemList from '../ItemList';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

// Initial solution to exercise.

test.skip('Render no items when list is empty', () => {
    const { getByText } = render(<ItemList items={[]} />);
    const listElement = getByText(/no items/);
    expect(listElement.firstChild.textContent).toBe('no items');
});

test.skip('Render items when list is not empty', () => {
    const { getByRole } = render(<ItemList items={['orange', 'lemon', 'grape']} />);
    const listElement = getByRole('list');
    expect(listElement.childNodes[0].textContent).toMatch('orange');
    expect(listElement.childNodes[1].textContent).toMatch('lemon');
    expect(listElement.childNodes[2].textContent).toMatch('grape');
});

// Other way to test

test('Render no items when list is empty', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ItemList items={[]} />, container);
    expect(container.innerHTML).toMatch('no items');
});

test('Render items when list is not empty', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']} />, container);
    expect(container.textContent).toMatch('apple');
    expect(container.textContent).toMatch('orange');
    expect(container.textContent).toMatch('pear');
});