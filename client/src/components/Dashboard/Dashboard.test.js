import { render, screen } from '@testing-library/react';
import Dashboard from "./Dashboard";

test('render dashboard', ()=>{
    render(<Dashboard />);
    const dashboardHeading = screen.getByText("accuBook Dashboard");
    expect(dashboardHeading).toBeInTheDocument();
})