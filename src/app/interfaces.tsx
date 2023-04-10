import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form';

export interface FormFields {
  name: string;
  surname: string;
  date: string;
  check: boolean;
  gender: string;
  country: string;
  file: string;
  valid?: boolean;
}

export interface RefTypes {
  errors: FieldErrors<FormFields>;
  reset: UseFormReset<FormFields>;
  register: UseFormRegister<FormFields>;
  result: JSX.Element[];
  messageClass: string;
  handle: (event: React.FormEvent<Element> | undefined) => void;
}

export interface ResultTypes {
  errors?: string[];
  total: number;
  total_pages: number;
  results: PicObjectTypes[];
}

export interface PicObjectTypes {
  alt_description: string;
  created_at: string;
  description: string;
  height: number;
  width: number;
  tags: { title: string }[];
  updated_at: string;
  user: { name: string };
  urls: UrlsTypes;
}

export interface UrlsTypes {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface ModalProps {
  visible: boolean;
  content: PicObjectTypes;
  onClose: () => void;
}
