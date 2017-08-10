import * as React from 'react';

import { store } from 'client/src/store/store'; // resolves correctly to 'client/src/redux/store/store.ts'

export const Form = (props: React.HTMLAttributes<HTMLFormElement>) => (
  <form {...props} />
);
