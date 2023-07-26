import mongoose from "mongoose";

const connect = () => {
  const env: string = process.env.ENV;
  const url: string = process.env.DB_URL;

  let connectionstring;

  const username: string = process.env.DB_USERNAME;
  const password: string = process.env.DB_PASSWORD;
  const host: string = process.env.DB_HOST;
  const base: string = process.env.DB_BASE;

  switch (env) {
    case "DEV":
      connectionstring = url;
      break;

    case "PROD":
      connectionstring = `mongodb+srv://${username}:${password}@${host}/${base}`;
      break;
  }

  async () => {
    await mongoose.connect(connectionstring, {
      directConnection: true,
    });
  };
};

export default connect;
