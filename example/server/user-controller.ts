export class UserController {
  GET_clown() {
    return '🤡' as const;
  }

  GET_many_zombies() {
    return ['🧟', '🧟‍♂️'] as const;
  }

  POST_genie() {
    return '🧞‍♂️' as const;
  }

  DELETE_wizard() {
    return '🧙‍♂️' as const;
  }
}
