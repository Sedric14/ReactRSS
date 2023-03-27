import { render, screen } from '@testing-library/react';
import Card from 'components/card';
import About from 'pages/about';
import Home from 'pages/home';
import Forms from 'pages/forms';
import { time } from 'components/card';
import data from 'app/data';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import FormCard from 'components/formCard';
import { FormFields } from './interfaces';

describe('App', () => {
  let container: Element | null;
  const a: FormFields = {
    name: 'John',
    surname: 'John',
    date: 'Dou',
    check: true,
    gender: 'male',
    file: '7a.png',
    country: 'Belarus',
  };

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

  it('should show forms page', () => {
    render(<Forms name="" />);
    expect(screen.getByText('Forms page')).toBeTruthy();
  });

  it('should render successfully', () => {
    render(<FormCard element={a} index={0} />);
    expect(screen.getAllByAltText('avatar')).toBeTruthy();
  });

  it('should show correct time', () => {
    expect(time(data[0].time)).toBe('1:25:10');
  });
});
