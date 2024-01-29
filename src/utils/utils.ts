import { Severity } from '../components/InfoBox';

export const enumToString = (value: Severity | undefined) => {
  return value?.toLowerCase() ?? '';
};
