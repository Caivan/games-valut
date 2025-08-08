# Games Vault 

A modern monorepo setup using Yarn workspaces with TypeScript support.

## Project Structure

```
games-vault/
├── apps/                # Applications
│   └── GamesVaultFront  # Frontend app for GamesVault libray
├── packages/            # Shared packages
│   └── GamesVaultUI/    # Shared components library for GamesVault
├── .yarn/               # Yarn v4 files
├── package.json         # Root package.json with workspaces
├── tsconfig.json        # TypeScript configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
└── .yarnrc.yml          # Yarn configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- Yarn >= 4.9.2

### Installation

1. **Enable Yarn v4** (if not already done):
   ```bash
   corepack enable
   yarn set version 4.9.2
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

## Available Scripts

### Root Level Scripts

- `yarn build` - Build all packages
- `yarn dev` - Start development mode for all packages
- `yarn test` - Run tests in all packages
- `yarn lint` - Lint all packages
- `yarn typecheck` - Type check all packages
- `yarn clean` - Clean build artifacts in all packages
- `yarn format` - Format all files with Prettier
- `yarn format:check` - Check formatting

### Workspace Commands

- `yarn workspace <workspace-name> <command>` - Run command in specific workspace
- `yarn workspaces foreach <command>` - Run command in all workspaces
- `yarn workspaces foreach -pi <command>` - Run command in parallel with interleaved output

## Adding New Packages

### 1. Create a new package

```bash
mkdir packages/my-new-package
cd packages/my-new-package
```

### 2. Create package.json

```json
{
  "name": "@games-vault/my-new-package",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "clean": "rm -rf dist",
    "typecheck": "tsc --noEmit",
    "lint": "eslint src --ext .ts,.tsx",
  }
}
```

### 3. Add TypeScript config

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

## Adding New Apps

### 1. Create app directory

```bash
mkdir apps/my-new-app
cd apps/my-new-app
```

### 2. Initialize your app (example with Next.js)

```bash
npx create-next-app@latest . --typescript --tailwind --app
```

### 3. Update package.json name

```json
{
  "name": "@games-vault/my-new-app",
  "version": "1.0.0"
}
```

## Development Workflow

1. **Start development mode**: `yarn dev`
2. **Make changes** to any package or app
3. **Build everything**: `yarn build`
4. **Run tests**: `yarn test`
5. **Lint code**: `yarn lint`
6. **Format code**: `yarn format`

## Tips

- Use `yarn workspace` to run commands in specific workspaces
- Dependencies between workspaces are automatically linked
- TypeScript path mapping is configured for easy imports
- ESLint and Prettier are configured for consistent code style
- Yarn v4 uses Node.js native modules for better performance

## Environment Variables

Create `.env.local` files in individual apps for environment-specific variables. The root `.gitignore` is configured to ignore these files.

## Contributing

1. Create a new branch
2. Make your changes
3. Run `yarn lint` and `yarn typecheck`
4. Run `yarn test`
5. Format with `yarn format`
6. Create a pull request

## Troubleshooting

### Yarn Issues

If you encounter Yarn-related issues:

```bash
# Clear Yarn cache
yarn cache clean

# Reinstall dependencies
rm -rf node_modules
rm yarn.lock
yarn install
```

### TypeScript Issues

If TypeScript can't find modules:

```bash
# Rebuild all packages
yarn clean
yarn build
```

### ESLint Issues

If ESLint complains about imports:

```bash
# Make sure all packages are built
yarn build
```