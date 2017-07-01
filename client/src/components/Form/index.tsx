import * as React from 'react';

import { createStore } from 'redux'; // won't work, 'redux' resolves to 'client/src/redux'

import { store } from 'redux/store'; // resolves correctly to 'client/src/redux/store'

export const Form = (props: React.HTMLAttributes<HTMLFormElement>) => (
  <form {...props} />
);
