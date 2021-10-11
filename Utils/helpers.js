import React from 'react';

export function propUpChildren(children, rest) {
  return React?.Children?.map(children, (child) => {
    return React.cloneElement(child, rest);
  });
}
