type Mods = Record<string, string | boolean>;

export const classNames = (cn: string, mods: Mods, additional: string[]) => {
  return [
    cn,
    ...additional,
    Object.entries(mods)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key),
  ].join(' ');
};
