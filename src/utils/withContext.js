import React, { Component } from 'react';

const createRender = (
  contexts,
  contextNames,
  Component,
  props,
  data = {},
  i = 0
) => {
  if (contextNames[i]) {
    const name = contextNames[i];
    const ContextConsumer = contexts[name].Consumer;
    return (
      <ContextConsumer>
        {value => {
          data[name] = value;
          return createRender(
            contexts,
            contextNames,
            Component,
            props,
            data,
            i + 1
          );
        }}
      </ContextConsumer>
    );
  } else {
    return <Component {...data} {...props} />;
  }
};

export const withContext = (Component, contexts) => {
  const contextNames = Object.keys(contexts);

  const WithContextComponent = props => {
    return createRender(contexts, contextNames, Component);
  };

  return WithContextComponent;
};
