import { resType } from 'app/data';
import { rest } from 'msw';
export const handlers = [
  rest.get('https://api.unsplash.com/search/photos/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resType));
  }),
  rest.get('https://api.unsplash.com/search/photos/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resType));
  }),
];
