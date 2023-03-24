import { render, screen } from '@testing-library/react';
import Card from 'components/card';
import About from 'pages/about';
import Home from 'pages/home';
import Forms from 'pages/forms';
import { time } from 'components/card';
import data from 'app/data';
import React from 'react';
import Valid from './Validation';
import { unmountComponentAtNode } from 'react-dom';

describe('App', () => {
  let container: Element | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  const validData = {
    name: 'John',
    surname: 'Dou',
    date: '1995-01-01',
    check: true,
    gender: 'male',
    country: 'Ukraine',
    file: 'string',
    valid: true,
  };

  it('should render successfully', () => {
    render(<Card />);
    expect(screen.getAllByAltText('img')).toBeTruthy();
    expect(screen.getAllByText('Смешарики. ДежаВю')).toBeTruthy();
  });

  it('should have a list cards', () => {
    render(<Home />);
    expect(screen.getAllByTestId('1')).toBeTruthy();
    expect(screen.getByText('Home page'));
  });

  it('should show about page', () => {
    render(<About />);
    expect(screen.getByText('About page')).toBeTruthy();
  });

  it('should show about page', () => {
    render(<Forms name="" />);
    expect(screen.getByText('Forms page')).toBeTruthy();
  });

  it('should show correct time', () => {
    expect(time(data[0].time)).toBe('1:25:10');
  });

  it('validation Name', () => {
    expect(Valid.isName('weerrt')).toBeFalsy();
    expect(Valid.isName('')).toBeFalsy();
    expect(Valid.isName('Reerrt')).toBeTruthy();
  });

  it('validation Year', () => {
    expect(Valid.isYear('1900-04-15')).toBeFalsy();
    expect(Valid.isYear('2024-04-15')).toBeFalsy();
    expect(Valid.isYear('1987-06-27')).toBeTruthy();
  });

  it('validation All', () => {
    expect(Valid.all(validData)).toBeTruthy();
  });
});
