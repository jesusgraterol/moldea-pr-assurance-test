export const mayDeploy = (role: "admin" | "collaborator", reviewPassed: boolean): boolean => {
  return role === "admin" || reviewPassed;
};
