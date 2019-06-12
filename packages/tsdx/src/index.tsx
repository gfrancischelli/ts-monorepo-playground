import * as React from 'react';
import { User } from '@mono/core';
import { users } from '@mono/core/users';

const jane: User = { name: 'jane doe' };

// Delete me
export const Thing = () => {
  return (
    <ul>
      {users.concat(jane).map(({ name }, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
};
