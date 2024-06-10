import { Children, Fragment } from 'react';

export const Each = <T,>({ render, of }: { render: (item: T, index: number) => JSX.Element; of: T[] }) => (
  <Fragment>{Children.toArray(of.map((item, index) => render(item, index)))}</Fragment>
);