export class CatController {
  GET_black_cat() {
    return '🐈‍⬛' as const;
  }

  POST_sad_cat() {
    return '😿' as const;
  }

  DELETE_angry() {
    return '😾' as const;
  }

  DELETE(): void {
    return;
  }
}
