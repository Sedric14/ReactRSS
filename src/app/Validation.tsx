export default class Valid {
  static isName(name: string | undefined) {
    if (name) return name.length > 2;
    return false;
  }
}
