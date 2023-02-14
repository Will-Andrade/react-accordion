import { render, screen } from '@testing-library/react';
import Accordion from '.';

const accordionDataMock = [
  { id: 0, title: 'Is John Wick alive?', content: 'Yes.' },
  { id: 1, title: 'How is he alive?', content: 'Well, he is John Wick.' }
];

describe('Accordion component', () => {
  it('should render data from props', () => {
    render(<Accordion data={accordionDataMock} />);

    const accordionItemOne = screen.getByTestId('accItem-0');
    const accordionItemTwo = screen.getByTestId('accItem-1');

    expect(accordionItemOne).toBeInTheDocument();
    expect(accordionItemTwo).toBeInTheDocument();
  });
});
