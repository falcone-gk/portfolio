export const isServer = () => {
  const config = useRuntimeConfig();
  return config.basicAuth.enabled;
};
