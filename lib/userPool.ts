import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-west-1_MqAkDO2IA",
  ClientId: "4370avlba6q4o8cos6bkbp51cg",
};

export default new CognitoUserPool(poolData);
