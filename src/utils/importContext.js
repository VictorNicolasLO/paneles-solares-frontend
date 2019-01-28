import { combineContexts } from './combineContexts';
import React from 'react';
export const importContext = (Component, contexts) => {
  const ComponentWithContexts = props => {
    const MainContextComponent = combineContexts(contexts);
    return (
      <MainContextComponent>
        <Component {...props} />
      </MainContextComponent>
    );
  };
  return ComponentWithContexts;
};
