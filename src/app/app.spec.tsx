import { render, screen } from '@testing-library/react';
import Card from 'components/card';
import About from 'pages/about';
import Home from 'pages/home';
import { time } from 'components/card';
import data from 'app/data';
import React from 'react';

describe('App', () => {
  it('should render successfully', () => {
    render(<Card />);
    expect(screen.getAllByAltText('img')).toBeTruthy();
    expect(screen.getAllByText("Смешарики. ДежаВю")).toBeTruthy();
  });

  it('should have a list cards', () => {
    render(<Home />);
    expect(screen.getAllByTestId('1')).toBeTruthy();
  });

  it('should show about page', () => {
    render(<About />);
    expect(screen.getByText('About page')).toBeTruthy();
  });

  it('should show correct time', () => {
    expect(time(data[0].time)).toBe("1:25:10");
  })
});
