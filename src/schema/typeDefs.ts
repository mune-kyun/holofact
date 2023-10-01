import fs from "fs";
import path from "path";

const typeDefs = `
  ${fs.readFileSync(path.resolve(__dirname, "schema.graphql").toString())}
`;

export default typeDefs;
