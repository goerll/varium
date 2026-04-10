#!/usr/bin/env node

const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const process = require("node:process");
const readline = require("node:readline/promises");

const PACKAGE_ROOT = path.resolve(__dirname, "..");

const FRAMEWORKS = [
  {
    key: "next",
    label: "Next.js",
    hostFile: "app/page.tsx",
    variantsImport: "@/components/Testimonials.variants",
  },
  {
    key: "vite-react",
    label: "React (Vite)",
    hostFile: "src/App.tsx",
    variantsImport: "./components/Testimonials.variants",
  },
  {
    key: "react",
    label: "React (other)",
    hostFile: "src/App.tsx",
    variantsImport: "./components/Testimonials.variants",
  },
  {
    key: "remix",
    label: "Remix",
    hostFile: "app/routes/_index.tsx",
    variantsImport: "~/components/Testimonials.variants",
  },
  {
    key: "custom",
    label: "Custom / not sure",
    hostFile: "src/App.tsx",
    variantsImport: "./components/Testimonials.variants",
  },
];

const AGENTS = [
  "Claude Code",
  "OpenCode",
  "Codex",
];

function printHelp() {
  console.log("Usage: varium init");
}

async function readJsonIfExists(filePath) {
  try {
    const content = await fsp.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function detectFramework(pkg) {
  if (!pkg) {
    return "custom";
  }

  const deps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
  };

  if (deps.next) {
    return "next";
  }

  if (deps.vite && deps.react) {
    return "vite-react";
  }

  if (deps["@remix-run/react"] || deps["@remix-run/node"] || deps.remix) {
    return "remix";
  }

  if (deps.react) {
    return "react";
  }

  return "custom";
}

async function promptSingle(rl, question, options, defaultIndex) {
  console.log(question);
  options.forEach((option, index) => {
    console.log(`  ${index + 1}. ${option}`);
  });

  while (true) {
    const raw = await rl.question(`Select one [${defaultIndex + 1}]: `);
    const value = raw.trim();

    if (value === "") {
      return defaultIndex;
    }

    const index = Number.parseInt(value, 10);
    if (Number.isInteger(index) && index >= 1 && index <= options.length) {
      return index - 1;
    }

    console.log("Enter a valid number from the list.");
  }
}

async function promptMulti(rl, question, options, defaultIndexes) {
  console.log(question);
  options.forEach((option, index) => {
    console.log(`  ${index + 1}. ${option}`);
  });

  const defaultLabel = defaultIndexes.map((index) => String(index + 1)).join(",");

  while (true) {
    const raw = await rl.question(`Select one or more [${defaultLabel}]: `);
    const value = raw.trim();
    const tokens = (value === "" ? defaultLabel : value)
      .split(",")
      .map((token) => token.trim())
      .filter(Boolean);

    const picked = new Set();
    let valid = true;

    for (const token of tokens) {
      const numeric = Number.parseInt(token, 10);
      if (Number.isInteger(numeric) && numeric >= 1 && numeric <= options.length) {
        picked.add(options[numeric - 1]);
        continue;
      }

      const match = options.find((option) => option.toLowerCase() === token.toLowerCase());
      if (match) {
        picked.add(match);
        continue;
      }

      valid = false;
      break;
    }

    if (valid && picked.size > 0) {
      return Array.from(picked);
    }

    console.log("Enter a comma-separated list of option numbers or exact names.");
  }
}

async function ensureDir(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

async function writeTrackedFile(rootDir, relativePath, contents, written) {
  const filePath = path.join(rootDir, relativePath);
  await ensureDir(path.dirname(filePath));
  const existed = fs.existsSync(filePath);
  await fsp.writeFile(filePath, contents, "utf8");
  written.push({ relativePath, action: existed ? "updated" : "created" });
}

async function loadTemplate(...parts) {
  return fsp.readFile(path.join(PACKAGE_ROOT, "templates", ...parts), "utf8");
}

function renderTemplate(template, framework) {
  return template
    .replaceAll("{{FRAMEWORK_NAME}}", framework.label)
    .replaceAll("{{HOST_FILE}}", framework.hostFile)
    .replaceAll("{{VARIANTS_IMPORT}}", framework.variantsImport);
}

async function runInit() {
  const cwd = process.cwd();
  const pkg = await readJsonIfExists(path.join(cwd, "package.json"));
  const detectedFramework = detectFramework(pkg);
  const defaultFrameworkIndex = Math.max(
    0,
    FRAMEWORKS.findIndex((framework) => framework.key === detectedFramework),
  );

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const frameworkIndex = await promptSingle(
      rl,
      "Which framework is this project using?",
      FRAMEWORKS.map((framework) => framework.label),
      defaultFrameworkIndex,
    );

    const selectedAgents = await promptMulti(
      rl,
      "Which agents should Varium configure for this repository?",
      AGENTS,
      [0, 1, 2],
    );

    const framework = FRAMEWORKS[frameworkIndex];
    const skillTemplate = renderTemplate(
      await loadTemplate("skills", "base-skill.md"),
      framework,
    );
    const written = [];

    await writeTrackedFile(cwd, ".agents/skills/varium/SKILL.md", skillTemplate, written);

    if (selectedAgents.includes("Claude Code")) {
      const claudeCommand = renderTemplate(
        await loadTemplate("commands", "claude-command.md"),
        framework,
      );
      await writeTrackedFile(cwd, ".claude/skills/varium/SKILL.md", skillTemplate, written);
      await writeTrackedFile(cwd, ".claude/commands/varium.md", claudeCommand, written);
    }

    if (selectedAgents.includes("OpenCode")) {
      const opencodeCommand = renderTemplate(
        await loadTemplate("commands", "opencode-command.md"),
        framework,
      );
      await writeTrackedFile(cwd, ".opencode/commands/varium.md", opencodeCommand, written);
    }

    console.log("");
    console.log(`Initialized Varium for ${framework.label}.`);
    console.log("");
    written.forEach((entry) => {
      console.log(`- ${entry.action}: ${entry.relativePath}`);
    });
    console.log("");
    console.log("Usage:");

    if (selectedAgents.includes("Claude Code")) {
      console.log('- Claude Code: /varium make a testimonial section');
    }

    if (selectedAgents.includes("OpenCode")) {
      console.log('- OpenCode: /varium make a testimonial section');
    }

    if (selectedAgents.includes("Codex")) {
      console.log('- Codex: use varium to make a testimonial section');
    }
  } finally {
    rl.close();
  }
}

async function main() {
  const command = process.argv[2];

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    process.exit(command ? 0 : 1);
  }

  if (command === "init") {
    await runInit();
    return;
  }

  printHelp();
  process.exit(1);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
