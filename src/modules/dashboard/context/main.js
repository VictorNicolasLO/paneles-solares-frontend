import { AuthContextComponent, AuthContext } from './Auth.context';
import { combineContexts } from '../../../utils/combineContexts';

const contexts = [AuthContextComponent];

export const MainContextComponent = combineContexts(contexts);
