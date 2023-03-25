import { FormFields } from './interfaces';

export default class Valid {
  static isName(name: string | undefined) {
    if (name) {
      if (this.isLength(name) && this.isUpperStart(name)) {
        return true;
      }
    }
    return false;
  }

  static isUpperStart(name: string) {
    if (name) {
      if (name[0].toUpperCase() === name[0]) {
        return true;
      }
    }
    return false;
  }

  static isLength(name: string) {
    if (name.length > 2) {
      return true;
    }
    return false;
  }

  static isYear(date: string | undefined) {
    if (date) {
      if (Number(date.slice(0, -6)) < 2023 && Number(date.slice(0, -6)) > 1933) {
        return true;
      }
    }
    return false;
  }

  static isCountry(data: string | undefined) {
    if (data) {
      if (data !== 'empty') {
        return true;
      }
    }
    return false;
  }

  static isGender(
    data1: HTMLInputElement | null | undefined,
    data2: HTMLInputElement | null | undefined
  ) {
    if (data1 && data2) {
      if (data1.checked || data2.checked) {
        return true;
      }
    }
    return false;
  }

  static all(data: FormFields) {
    if (data.check === true && data.date && data.file && data.name && data.surname) {
      return true;
    }
    return false;
  }
}
