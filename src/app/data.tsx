import { FormFields, PicObjectTypes, ResultTypes } from './interfaces';

const picObj: PicObjectTypes = {
  alt_description: 'alt_description',
  created_at: 'yesterday',
  description: 'description',
  height: 200,
  width: 600,
  tags: [{ title: '#firstTag' }, { title: '#secondTag' }],
  updated_at: 'now',
  user: { name: 'Vasya' },
  urls: {
    full: 'full',
    raw: 'raw',
    regular:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max',
    small: 'small',
    small_s3: 'small_s3',
    thumb: 'thumb',
  },
};

export const resType: ResultTypes = {
  total: 0,
  total_pages: 0,
  results: [picObj, picObj, picObj],
};

export const emptyModalCard: PicObjectTypes = {
  alt_description: '',
  created_at: '',
  description: '',
  height: 0,
  width: 0,
  tags: [],
  updated_at: '',
  user: { name: '' },
  urls: { full: '', raw: '', regular: '', small: '', small_s3: '', thumb: '' },
};

export const entered: FormFields = {
  name: 'John',
  surname: 'John',
  date: 'Dou',
  check: true,
  gender: 'male',
  file: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max',
  country: 'Belarus',
};

export default picObj;
