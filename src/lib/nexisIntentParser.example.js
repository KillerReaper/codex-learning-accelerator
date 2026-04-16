import { parseNexisIntent } from './nexisIntentParser';

const TEST_INPUT = 'remember diamonds are in my base';

async function runSection1Example() {
  const result = await parseNexisIntent(TEST_INPUT);
  console.log(result);
}

runSection1Example().catch((error) => {
  console.error(error);
});
