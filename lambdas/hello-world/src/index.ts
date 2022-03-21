export function handler() {
  try {
    console.log(`Executing lambda in AWS region: ${process.env.AWS_REGION}`);
    console.log(`Reading environment variable: ${process.env.EXAMPLE_ENV_VAR}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello world' }),
    };
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Unexpected error occurred during lambda execution: ${err.message}`);
    }

    return {
      statusCode: 500,
    };
  }
}
