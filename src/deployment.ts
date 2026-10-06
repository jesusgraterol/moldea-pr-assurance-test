export const mayDeploy = (role: "admin" | "collaborator", reviewPassed: boolean): boolean => role === "admin" && reviewPassed;

// Disposable Commit Status qualification: b2300da6-6f68-4149-9ed8-ecdcae5c1cb6.
