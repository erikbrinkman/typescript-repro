import { Parent, Child } from "./inter";

class Impl<A, B> implements Parent<A, B> {
  constructor(readonly child: Child<A, B>) {
  }

  getChild(): Child<A, B> {
    return this.child;
  }

  *iter(): Iterable<Parent<A, B>> {
    const map = new Map<Child<unknown, unknown>, Child<A, B>[]>();

    function* gen(
      inp: Child<A, B>
    ): Iterable<Child<A, B>> {
      yield* map.get(inp) || [];
    }
  }
}
