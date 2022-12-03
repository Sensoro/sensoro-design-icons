import { deleteAsync } from 'del';

export const clean = (dirs: string[]) =>
  function CleanDirectories() {
    return deleteAsync(dirs);
  };
