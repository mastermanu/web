const isWriteApiPermitted = () => {
  return ![false, 'false'].includes(process.env.TEMPORAL_PERMIT_WRITE_API);
};

const extractAccessToken = (ctx) => {
  if (ctx.isAuthenticated()) {
    return ctx.state.user.accessToken;
  }
  return undefined;
};

module.exports = { isWriteApiPermitted, extractAccessToken };
