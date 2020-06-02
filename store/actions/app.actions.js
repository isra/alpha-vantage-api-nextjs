export const LOADING = '[App] Loading process';

export const loadingProcess = (status) => {
  return {
    type: LOADING,
    payload: status,
  };
};
