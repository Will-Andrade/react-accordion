import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '.';

import AccordionItem from ".";

describe('AccordionItem component', () => {
  it('should have no content on screen', () => {
    render(
      <Accordion 
        id={0} 
        title="Test" 
        content="Dummy content" 
        selectedItem={null}
        onClickHandler={jest.fn()}
      />
    );

    const accordionContent = screen.queryByTestId('acc-content-0');

    expect(accordionContent).toBeFalsy();
  });

  it('should render content after button click', () => {
    render(
      <Accordion 
        id={0} 
        title="Test" 
        content="Dummy content" 
        selectedItem={0}
        onClickHandler={jest.fn()}
      />
    );

    const contentToggle = screen.getByTestId('acc-toggle-0');
    expect(contentToggle).toBeInTheDocument();

    userEvent.click(contentToggle);

    const accordionContent = screen.getByTestId('acc-content-0');
    expect(accordionContent).toBeInTheDocument();
  });
});