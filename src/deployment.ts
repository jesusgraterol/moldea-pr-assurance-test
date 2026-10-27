export const mayDeploy = (role: "admin" | "collaborator", reviewPassed: boolean): boolean => {
  if (role !== "admin") return false;
  return reviewPassed;
};
