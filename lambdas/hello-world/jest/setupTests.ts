import { readFileSync } from 'fs';

const { Parameters: data } = JSON.parse(readFileSync('../../env.json', 'utf8'));

Object.entries(data).forEach(([key, value]) => {
  process.env[key] = value as string;
});

// Add env variables set by AWS
process.env['AWS_REGION'] = 'us-east-1';
