import { AuthContextComponent, AuthContext } from './Auth.context';
import { combineContexts } from '../../../utils/combineContexts';

const contextList = [['AuthContext', AuthContext, AuthContextComponent]];

export const MainContextComponent = combineContexts(contextList);
