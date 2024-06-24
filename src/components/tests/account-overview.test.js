import { render, screen  } from '@testing-library/react';
import AccountOverview from '../account-overview';

const data = {
  supportContact: { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

describe('AccountOverview Component', () => {
  
  test('render AccountOverview and field', () => {
    render(<AccountOverview data={data}/>);
  
    const name = screen.getByText(/John Doe/i);
    const email = screen.getByText(/john.doe@example.com/i);
    const phone = screen.getByText(/123-456-7890/i);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
  
  });
  
  test('render AccountOverview fields calcated', () => {
  
    const { container } = render(<AccountOverview data={data} />);
  
    const uploadVal = container.querySelector('#uploadVal');
    expect(uploadVal).toBeInTheDocument();
    expect(uploadVal).toHaveTextContent('8 uploads');
  
    const linesVal = container.querySelector('#linesVal');
    expect(linesVal).toBeInTheDocument();
    expect(linesVal).toHaveTextContent('16');
  
    const uploadValPercet = container.querySelector('#uploadValPercet');
    expect(uploadValPercet).toBeInTheDocument();
    expect(uploadValPercet).toHaveTextContent('37.5%');
  
    const linesValPercet = container.querySelector('#linesValPercet');
    expect(linesValPercet).toBeInTheDocument();
    expect(linesValPercet).toHaveTextContent('20%');
  });

});