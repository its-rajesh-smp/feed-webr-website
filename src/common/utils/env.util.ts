const env = import.meta.env;
export const getEnv = (key: string): string => {
  const value = env["VITE_" + key];
  if (!value) {
    throw new Error(`Environment variable ${key} is missing`);
  }
  return value;
};
