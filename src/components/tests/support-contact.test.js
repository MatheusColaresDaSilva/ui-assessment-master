import { render, screen } from '@testing-library/react';
import SupportContact from '../SupportContact';
import dogSupport from '../imgs/dog-support.png';

describe('SupportContact Component', () => {
  const data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  test('render SupportContact texts', () => {
    render(<SupportContact props={data} />);
    const accountOverviewElement = screen.getByText(/ACCOUNT OVERVIEW/i);
    const supportContactElement = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
    
    expect(accountOverviewElement).toBeInTheDocument();
    expect(supportContactElement).toBeInTheDocument();
    
  });


  test('render imgSupport with alt text', () => {
    render(<SupportContact props={data} />);
    const imgElement = screen.getByAltText(/Support/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', dogSupport);
  });

  test('renders contact details', () => {
    render(<SupportContact props={data} />);
    const nameElement = screen.getByText(data.name);
    const emailElement = screen.getByText(data.email);
    const phoneElement = screen.getByText(data.phone);
    
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });
});