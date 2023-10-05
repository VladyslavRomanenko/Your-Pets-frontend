export const getClassName = (touched, errors) => {
  if (touched && errors) {
    return 'error';
  }
  if (touched && !errors) {
    return 'success';
  }
  return '';
};
