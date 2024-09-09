import React from 'react'; 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './index';

// Mock functions
const mockSetDate = jest.fn();
const mockUpdateTimes = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with initial elements', () => {
    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        availableTimes={['12:00', '13:00']}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Check for form elements
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('updates time and date fields correctly', () => {
    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        availableTimes={['12:00', '13:00']}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Simulate date change
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: '2024-09-01' }
    });
    expect(mockSetDate).toHaveBeenCalledWith('2024-09-01');
    expect(mockUpdateTimes).toHaveBeenCalledWith('2024-09-01');

    // Simulate time change
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: '12:00' }
    });
    expect(screen.getByLabelText(/Choose time/i).value).toBe('12:00');

    // Simulate guests change
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: '4' }
    });
    expect(screen.getByLabelText(/Number of guests/i).value).toBe('4');

    // Simulate occasion change
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: 'Anniversary' }
    });
    expect(screen.getByLabelText(/Occasion/i).value).toBe('Anniversary');
  });

  test('shows error styles when form fields are invalid', async () => {
    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        availableTimes={['12:00', '13:00']}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Simulate submit with empty fields
    fireEvent.click(screen.getByText(/Make Your reservation/i));

    await waitFor(() => {
      expect(screen.getByLabelText(/Choose date/i)).toHaveClass('error');
      expect(screen.getByLabelText(/Choose time/i)).toHaveClass('error');
      expect(screen.getByLabelText(/Number of guests/i)).toHaveClass('error');
      expect(screen.getByLabelText(/Occasion/i)).toHaveClass('error');
    });
  });

  test('submits the form correctly when all fields are valid', () => {
    render(
      <BookingForm
        date="2024-09-01"
        setDate={mockSetDate}
        availableTimes={['12:00', '13:00']}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: '12:00' }
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: '4' }
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: 'Anniversary' }
    });

    fireEvent.click(screen.getByText(/Make Your reservation/i));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2024-09-01',
      time: '12:00',
      guests: 4,
      occasion: 'Anniversary',
    });
  });
});
