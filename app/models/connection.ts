import mongoose from "mongoose";

class Connection {
  connectionstring: string;

  constructor() {
    this.setConnectionString();
  }

  setConnectionString() {
    const env: string = process.env.ENV;
    const url: string = process.env.DB_URL;

    const username: string = process.env.DB_USERNAME;
    const password: string = process.env.DB_PASSWORD;
    const host: string = process.env.DB_HOST;
    const base: string = process.env.DB_BASE;

    if (env === "DEV") {
      this.connectionstring = url;
    } else if (env === "PROD") {
      this.connectionstring = `mongodb+srv://${username}:${password}@${host}/${base}`;
    }

    console.log(this.connectionstring);
    
  }

  OpenConnection = async () => {
    await mongoose.connect(this.connectionstring);
  };

  CloseConnection = async () => {
    await mongoose.connect(this.connectionstring);
  };
}

export default Connection;
