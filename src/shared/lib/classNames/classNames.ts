type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  const filteredMods = Object.entries(mods || {})
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);

  return [cls, ...(additional || []), ...filteredMods].join(" ");
}
