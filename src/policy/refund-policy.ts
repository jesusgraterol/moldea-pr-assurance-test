export const canApproveRefund = (ownsOrder: boolean, hasPermission: boolean): boolean =>
  ownsOrder && hasPermission;
