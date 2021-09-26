export class UserController {
  GET() {
    return ['🤡', '🧟', '🧟‍♂️', '🧞‍♂️', '🧙‍♂️'] as const;
  }

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
