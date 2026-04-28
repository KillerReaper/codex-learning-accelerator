import { processNexisInput } from './nexisMemory';

const STORE_INPUT = 'remember my base is at 100 64 200';
const RECALL_INPUT = 'where is my base';

async function runSection1Example() {
  const stored = await processNexisInput(STORE_INPUT);
  const recalled = await processNexisInput(RECALL_INPUT);

  console.log(stored);
  console.log(recalled);
}

runSection1Example().catch((error) => {
  console.error(error);
});
