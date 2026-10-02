export const mayDeploy = (role: "admin" | "collaborator", reviewPassed: boolean): boolean => role === "admin" || reviewPassed;
