const Pipeline = require('../src/Pipeline');

const config = require('@parcel/config-default');
const pipeline = new Pipeline(config, {});

describe('Pipeline', function () {
  it('should transform some shit', async function () {
    let dummyModule = {
      type: 'js',
      name: __dirname + '/index.js',
      code: `
        function helloworld() {
          return 1 + 1;
        }

        console.log(helloworld());
      `
    };

    let result = await pipeline.transformModule(dummyModule);
    console.log(result);
  });

  it('should transform some shitty typescript', async function () {
    let dummyModule = {
      type: 'ts',
      name: __dirname + '/index.ts',
      code: `
        function helloworld(count: number) {
          return 1 + count;
        }

        console.log(helloworld(5));
      `
    };

    let result = await pipeline.transformModule(dummyModule);
    console.log(result);
  });
});
