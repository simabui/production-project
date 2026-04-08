import { App } from "@tinyhttp/app";
import { createApp } from "json-server/lib/app.js";
import { JSONFilePreset } from "lowdb/node";
import { json } from "milliparsec";
import path from "path";

const DB_PATH = path.join(process.cwd(), "mock-server", "db.json");
const db = await JSONFilePreset(DB_PATH, {});
const root = new App();

root.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // or "*" for dev
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});

root.use(json());
const jsonApp = createApp(db);

root.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  next();
});

root.use((req, res, next) => {
  try {
    // Allow OPTIONS and POST /login without Authorization
    if (req.method === "OPTIONS" || (req.method === "POST" && req.path === "/login")) {
      return next();
    }

    if (!req.headers || !req.headers.authorization) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

root.post("/login", (req, res) => {
  try {
    const username = req.body && req.body.username;
    if (!username) {
      return res.status(400).json({ error: "username required" });
    }

    const users = db.data && db.data.users;
    if (!Array.isArray(users)) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = users.find((u) => u && u.username === username);
    if (user) {
      return res.json(user);
    }

    return res.status(404).json({ error: "User not found" });
  } catch (err) {
    console.error("Login handler error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

root.use(jsonApp);

const PORT = 8000;
root.listen(PORT, () => {
  console.log(`running server at http://localhost:${PORT}`);
});
