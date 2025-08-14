# Games Vault

A modern monorepo setup using Yarn workspaces with TypeScript support.

## Project Architecture

<img width="619" height="222" alt="image" src="https://github.com/user-attachments/assets/44f04f9c-a457-43ab-84ba-6c96655a625c" />

- Games Vault UI: is the components library which implements the design system of the application and is exported as a package to be used in the front-end application. It can be reused for multiple applications to define a consistent design across all the applications.
  
- Games Vault Front App: Is the main consumer end application where all the features and logic of the games library is implemented, it makes use of the Games Vault UI as a dependency for use the design system and the base components available. 


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

For a quick start, use these in a local environment
 
 ```bash
   yarn install
   yarn workspace @games-vault/gamesvault-ui build
   yarn workspace @games-vault/gamevault-front-app build
   yarn workspace @games-vault/gamesvault-ui storybook
   yarn workspace @games-vault/gamevault-front-app dev
   
 ```


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

## Design system

The design system is documented using Storybook, as well as the base components of the Components Library. 

For a better and complete view of the design system values, run the storybook locally and verify it http://localhost:6006/


   `yarn workspace @games-vault/gamesvault-ui storybook`

- Colors
  - Light Theme
  - Dark Theme   
- Typography
- Radii
- Spacing
  
### Colors
<img width="800" height="866" alt="image" src="https://github.com/user-attachments/assets/a5efdf12-ec36-41da-bf9d-b7ff0aeff7d8" />

### Typography

<img width="800" height="755" alt="image" src="https://github.com/user-attachments/assets/ba4493f8-6d34-4ec5-8d64-25909532a539" />


### Radii

<img width="235" height="431" alt="image" src="https://github.com/user-attachments/assets/771fee70-a83b-46c8-948b-a2046249b8fd" />

### Spacing

<img width="738" height="319" alt="image" src="https://github.com/user-attachments/assets/0eb3be6b-5304-45fc-bf08-8bbab2ce19fe" />


## Application

### Dark Theme
<img width="998" height="717" alt="image" src="https://github.com/user-attachments/assets/306db112-aa2d-4652-9e98-582d59095463" />

### Light Theme
<img width="1003" height="714" alt="image" src="https://github.com/user-attachments/assets/faa08048-521c-4d56-a286-4e5cfc505d4a" />


## Future improvements and implementation

- Full testing support of components and pages
- Create more Base components in the `@games-vault/gamesvault-ui` components library
- Improve layout of filtering
- Adding microinteractions
- Fix the Deployment of the complete project. There is a pipeline running in GitHub Actions; however, it has some issues with the base route.

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
    "lint": "eslint src --ext .ts,.tsx"
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
