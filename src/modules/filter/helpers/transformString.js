export const transformString = inputString => {
  switch (inputString) {
    case 'up to 1 year':
      return '1 year';
    case 'up to 2 years':
      return '2 years';
    case 'from 2 years':
      return '2+ years';
    default:
      return inputString;
  }
};
