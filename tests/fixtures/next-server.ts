import { test as base } from "@playwright/test";
import { spawn, ChildProcess } from "child_process";
import getPort from "get-port";

type NextServerFixture = {
  baseUrl: string;
};

export const test = base.extend<NextServerFixture>({
  baseUrl: async ({}, use) => {
    // Get a free port
    const port = await getPort();
    console.log(`Starting Next.js server on port ${port}`);

    let serverProcess: ChildProcess | null = null;

    try {
      // Start the Next.js server with the selected port
      serverProcess = spawn("npm", ["run", "dev"], {
        env: { ...process.env, PORT: port.toString() },
        stdio: "pipe",
        shell: true,
      });

      // Capture server output for debugging
      serverProcess.stdout?.on("data", (data) => {
        const output = data.toString();
        if (output.includes("ready started server on")) {
          console.log(`Next.js server is ready on port ${port}`);
        }
      });

      serverProcess.stderr?.on("data", (data) => {
        console.error(`Next.js server error: ${data}`);
      });

      // Wait for server to be ready
      await new Promise<void>((resolve) => {
        const checkServer = async () => {
          try {
            const response = await fetch(`http://localhost:${port}`);
            if (response.status === 200) {
              resolve();
            } else {
              setTimeout(checkServer, 500);
            }
          } catch (error) {
            setTimeout(checkServer, 500);
          }
        };

        // Initial delay before checking
        setTimeout(checkServer, 1000);
      });

      const baseUrl = `http://localhost:${port}`;
      console.log(`Server ready at ${baseUrl}`);

      // Provide the baseUrl to the test
      await use(baseUrl);
    } finally {
      console.log(`Shutting down Next.js server on port ${port}`);
      if (serverProcess) {
        serverProcess.kill("SIGTERM");
      }
    }
  },
});

export { expect } from "@playwright/test";
