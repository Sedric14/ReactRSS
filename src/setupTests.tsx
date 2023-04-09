import server from './mocks/server.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mathers from '@testing-library/jest-dom';
// import expect from 'vitest';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
