export interface Parent<A, B> {
  // __sentinel__?: A;
  getChild(): Child<A, B>;

  iter(): Iterable<Parent<A, B>>;
}

export interface Child<A, B>
  extends Parent<A, B> {
  readonly a: A;
  readonly b: B;
}

declare const x: Parent<unknown, unknown>;
//(): Parent<null, unknown> => x;
