# Deployment policy

Production deployment is permitted only when the caller is an administrator AND the review has succeeded. A successful review alone must never grant a collaborator deployment permission. The exported mayDeploy function owns this authorization check.

The disposable status fixture preserves the same administrator and successful-review requirements.
