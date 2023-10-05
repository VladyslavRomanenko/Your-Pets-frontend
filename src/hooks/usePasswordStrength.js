export const usePasswordStrength = () => {
  const getPasswordStrengthWidth = password => {
    const maxLength = 10;
    const passwordLength = password?.length || 0;
    const strengthPercentage = (passwordLength / maxLength) * 100;
    return `${Math.min(strengthPercentage, 87)}%`;
  };

  const getPasswordStrengthColor = password => {
    const passwordStrengthRanges = [
      { length: 1, color: '#CC0000' },
      { length: 3, color: '#FF0000' },
      { length: 4, color: '#FF2A00' },
      { length: 5, color: '#FF5500' },
      { length: 6, color: '#FFAA00' },
      { length: 7, color: '#FFC107' },
      { length: 8, color: '#B39500' },
      { length: 9, color: '#5DBA00' },
      { length: 10, color: '#12B000' },
      { length: Infinity, color: '#2A8000' }, 
    ];

    const { color } = passwordStrengthRanges.find(range => password?.length <= range.length) || {
      color: 'transparent',
    };
    return color;
  };

  const getPasswordStrengthText = password => {
    const passwordStrengthRanges = [
      { min: 1, max: 1, text: 'Invalid Password' },
      { min: 2, max: 2, text: 'Very Weak Password' },
      { min: 3, max: 3, text: 'Weak Password' },
      { min: 4, max: 4, text: 'Below Average Password' },
      { min: 5, max: 5, text: 'Average Password' },
      { min: 6, max: 6, text: 'Moderate Password' },
      { min: 7, max: 7, text: 'Invalid Password' },
      { min: 8, max: 8, text: 'Strong Password' },
      { min: 9, max: 9, text: 'Very Strong Password' },
      { min: 10, max: 10, text: 'Robust Password' },
      { min: 11, max: Infinity, text: 'Secure!!!' },
    ];

    const { text } = passwordStrengthRanges.find(
      range => password?.length >= range.min && password?.length <= range.max
    ) || { text: '' };

    return text;
  };

  return {
    getPasswordStrengthWidth,
    getPasswordStrengthColor,
    getPasswordStrengthText,
  };
};
