export const mayDeploy = (role: 'admin' | 'collaborator', reviewPassed: boolean): boolean => {
  const isAdministrator = role === 'admin';
  return isAdministrator && reviewPassed;
};
