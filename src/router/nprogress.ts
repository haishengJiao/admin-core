import type { NProgress } from 'nprogress';

let nProgressInstance: NProgress | null = null;

const loadNprogress = async () => {
  if (nProgressInstance) return nProgressInstance;

  nProgressInstance = await import('nprogress');
  nProgressInstance.configure({
    showSpinner: true,
    speed: 300,
  });
  return nProgressInstance;
};

const startProgress = async () => {
  const nprogress = await loadNprogress();
  nprogress?.start();
};

const stopProgress = async () => {
  const nprogress = await loadNprogress();
  nprogress?.done();
};

export { startProgress, stopProgress };
