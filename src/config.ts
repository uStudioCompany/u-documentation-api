import './lib/env';

export const serviceConfig = {
  port: process.env.SERVICE_PORT || '3434',
};

export const githubApi = {
  uri: 'https://api.github.com/graphql',
  apiKey: process.env.GIT_KEY || '',
};
