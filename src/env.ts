type EnvironmentVariables = {
  dbFile: string;
};

export const env: EnvironmentVariables = {
  dbFile: process.env.DB_FILE || '',
};
