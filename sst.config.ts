import { SSTConfig } from "sst";
import { Api, Bucket, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "client-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const api = new Api(stack, "api", {
        routes: {
          "GET /": "api/src/time.handler",
          "GET /test": "api/src/test.handler",
        },
      });
      const bucket = new Bucket(stack, "public");
      const site = new NextjsSite(stack, "site", {
        bind: [api, bucket],  
      });
      stack.addOutputs({
        ApiUrl: api.url,
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
