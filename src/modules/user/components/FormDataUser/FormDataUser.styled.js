import styled from "styled-components";

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    gap: 10px;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    width: 355px;
    gap: 10px;
  }
`;

export const UserLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const FormTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  letter-spacing: 0.56px;
  color: ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;

export const UserInput = styled.input`
  width: 70%;
  height: 24px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.l};
  border: 1px solid ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: 0.48px;

  @media only screen and (min-width: 768px) {
    width: 255px;
    height: 30px;
    padding: 4px 12px;
    border-radius: ${({ theme }) => theme.radii.s};

    font-size: ${({ theme }) => theme.fontSizes.m};
    letter-spacing: 0.64px;
  }
`;

export const FormValidation = styled.p`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  top: 23px;
  color: ${({ theme }) => theme.colors.red};

  @media only screen and (min-width: 768px) {
    top: 25px;
  }
`;
