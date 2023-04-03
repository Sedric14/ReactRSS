import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form';

interface ICard {
  id: number;
  img: string;
  name: string;
  desc: string;
  time: number;
  link: string;
}

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

export default ICard;
