import { CatController } from './cat-controller';
import { UserController } from './user-controller';

const userController = new UserController();
const catController = new CatController();

const app = {
  user: userController,
  cat: catController,
} as const;
export type MyApp = typeof app;
