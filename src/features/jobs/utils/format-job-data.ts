import employmentTypes from '../data/employmentTypes.json';
import experienceLevels from '../data/experienceLevels.json';
import salaryRanges from '../data/salaryRanges.json';

export const formatJobData = (
  data: string,
  type: 'employmentType' | 'salaryRange' | 'experienceLevel'
) => {
  const formatFn = {
    employmentType: (data: string) => {
      const employmentType = employmentTypes.options.find(
        (employmentType) => employmentType.value === data
      );
      return employmentType?.label || 'N/A';
    },
    salaryRange: (data: string) => {
      const salaryRange = salaryRanges.options.find(
        (salaryRange) => salaryRange.value === data
      );
      return salaryRange?.label || 'N/A';
    },
    experienceLevel: (data: string) => {
      const experienceLevel = experienceLevels.options.find(
        (experienceLevel) => experienceLevel.value === data
      );
      return experienceLevel?.label || 'N/A';
    },
  };

  return formatFn[type](data);
};
