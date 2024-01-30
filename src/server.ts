import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string); // ami jani j ata string hobe ai as string use kora hoise
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
main();
