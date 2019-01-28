import React, { Component } from 'react';
import { importContexts } from '../../../../utils/importContexts';
import AuthContext from '../../context/Auth.context';
import { injectContexts } from '../../../../utils/injectContexts';
import TestContext from './test-context.ctx';

export class ComponentTest extends Component {
  render() {
    console.log('asdf');
    const { testContext, authContext, tt } = this.props;
    console.log(authContext.isAuth);
    return (
      <div
        onClick={() => {
          testContext.add();
        }}
      >
        aa - {authContext.isAuth.toString()} - asdlkfsaldfkjda{' '}
        {testContext.value}
      </div>
    );
  }
}

const ContextInjected = injectContexts(ComponentTest, {
  testContext: TestContext,
  authContext: AuthContext
});

export default importContexts(ContextInjected, [TestContext]);
