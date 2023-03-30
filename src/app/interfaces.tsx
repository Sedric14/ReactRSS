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
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  check: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  result: JSX.Element[];
  messageClass: string;
  nameClass: string;
  countryClass: string;
  surnameClass: string;
  genderClass: string;
  dateClass: string;
  checkClass: string;
  fileClass: string;
  handle: (event: React.FormEvent | undefined) => void;
}

export default ICard;
