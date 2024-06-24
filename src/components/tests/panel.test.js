import { render, screen } from '@testing-library/react';
import Panel from '../Panel';

describe('Panel Component', () => {
  const salesOverview = {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
  };

  test('render Panel Texts', () => {
    render(<Panel props={salesOverview} />);
    const salesTextElement = screen.getByText(/Sales/i);
    expect(salesTextElement).toBeInTheDocument();
    const uploadSucess = screen.getByText(/UPLOAD SUCESS/i);
    expect(uploadSucess).toBeInTheDocument();
    const linesSaved = screen.getByText(/LINES SAVED/i);
    expect(linesSaved).toBeInTheDocument();
  });


  test('render Icons in panel page', () => {
    const { container } = render(<Panel props={salesOverview}  />);
    const svgUpdload = container.querySelector("[data-icon='upload']");
    expect(svgUpdload.classList.toString()).toContain("fa-upload");

    const svgInfo = container.querySelector("[data-icon='info-circle']");
    expect(svgInfo.classList.toString()).toContain("info-circle");

  });

  
});