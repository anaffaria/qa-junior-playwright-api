import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  reporter: [["html"]],
});
