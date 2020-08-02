import createCtx from '../createCtx';

declare global {
  type UserAuthCtxValue = {
    loading: boolean,
    user: TwitchUser | null,
  };
}

const {
  ctx: UserAuthContext, useCtx: useUserAuthContext,
} = createCtx<UserAuthCtxValue>();

export { useUserAuthContext };
export default UserAuthContext;
