export class CatController {
  GET_get_cats() {
    return ['😺', '🙀'] as const;
  }

  POST_sad_cat() {
    return '😿' as const;
  }

  DELETE_angry() {
    return '😾' as const;
  }
}
