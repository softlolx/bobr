import { UserSchema, User } from './model/types/userSchema';
import { actions as userActions, reducer as userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getAuthDataUser';

export { userActions, userReducer, UserSchema, User, getUserAuthData };
