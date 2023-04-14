/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import About from 'pages/about';
import picObj, { entered } from 'app/data';
import Home from 'pages/home';
import SmallImage from 'components/image';
import FormPage from 'pages/formsPage';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Card from 'components/card';
import Board from 'components/board';
import { Provider } from 'react-redux';
import store from '../app/store';
import FormCard from 'components/formCard';
import NotFound from 'pages/notFound';

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
      fireEvent.input(screen.getByTestId('search'), 'car');
      fireEvent.click(screen.getByTestId('sendSearch'));
      expect(screen.getByTestId('empty')).toBeTruthy();
    }, 1000);
  });

  it('should render card', () => {
    render(
      <Provider store={store}>
        <FormCard element={entered} index={0} />
      </Provider>
    );
    expect(screen.getByTestId('entered')).toBeTruthy();
  });

  it('should render notFound', () => {
    render(<NotFound />);
    expect(screen.getByText('Not Found')).toBeTruthy();
  });
});
