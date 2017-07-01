import * as React from 'react';

import { store } from 'redux/store'; // resolves correctly to 'client/src/redux/store'

export const Form = (props: React.HTMLAttributes<HTMLFormElement>) => (
  <form {...props} />
);
