type Mods = Record<string, string | boolean>;

export const classNames = (cn: string, mods: Mods = {}, additional: string[] = []): string =>
  [
    cn,
    Object.entries(mods)
      .filter(([_, value]) => value === true)
      .map(([key]) => key)
      .join(' '),
    ...additional.filter(Boolean),
  ]
    .join(' ')
    .trim();
