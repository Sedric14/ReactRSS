/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import About from 'pages/about';
import picObj from 'app/data';
import Home from 'pages/home';
import SmallImage from 'components/image';
import FormPage from 'pages/formsPage';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
// import FormCard from 'components/formCard';
// import { FormFields } from './interfaces';
import Card from 'components/card';
import Board from 'components/board';
import { Provider } from 'react-redux';
import store from '../app/store';

describe('App', () => {
  let container: Element | null;
  // const a: FormFields = {
  //   name: 'John',
  //   surname: 'John',
  //   date: 'Dou',
  //   check: true,
  //   gender: 'male',
  //   file: [],
  //   country: 'Belarus',
  // };

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
    render(<SmallImage value={picObj} key={1} func={() => {}} />);
    expect(screen.getAllByAltText('img')).toBeTruthy();
  });

  it('should have a list cards', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText('Home page'));
  });

  it('shold render modal window', () => {
    render(
      <Card
        visible={true}
        content={picObj}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getAllByText('description')).toBeTruthy();
  });

  it('should show about page', () => {
    render(<About />);
    expect(screen.getByText('About page')).toBeTruthy();
  });

  it('should show forms page', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByText('Forms page')).toBeTruthy();
  });

  // it('should render successfully', () => {
  //   render(<FormCard element={a} index={0} />);
  //   expect(screen.getAllByAltText('avatar')).toBeTruthy();
  // });

  it('should pass validation', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    fireEvent.input(screen.getByLabelText<HTMLInputElement>('Name:'), {
      target: { value: 'acv' },
    });
    expect(fireEvent.submit(screen.getByTestId<HTMLFormElement>('form'))).toBeFalsy();
  });

  it('should render from api', () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    expect(screen.getAllByTestId('prel')).toBeTruthy();
  });

  it('should render from api', () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    setTimeout(() => {
      expect(screen.getAllByTestId('1')).toBeTruthy();
    }, 1000);
  });

  it('should render from api', () => {
    render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    setTimeout(() => {
      fireEvent.click(screen.getByAltText('img'));
      expect(screen.getByTestId('userName').nodeValue).equal('Vasya');
    }, 1000);
  });
  it('should show not found', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    setTimeout(() => {
      fireEvent.input(screen.getByTestId('search'), '');
      fireEvent.click(screen.getByTestId('sendSearch'));
      expect(screen.getByTestId('empty')).toBeTruthy();
    }, 1000);
  });
});
