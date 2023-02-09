type Mods = Record<string, string | boolean>;

export const classNames = (cn: string, mods: Mods = {}, additional: string[] = []) =>
  [
    cn,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key),
  ].join(' ');
