import styled from "styled-components";

export const Avatar = styled.div`
  margin: 0 auto 59px;

  img {
    height: 182px;
    width: 182px;
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.radii.l};
    overflow: hidden;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 71px;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 auto 63px;
  }
`;

export const SelectedPhoto = styled.label`
  position: absolute;
  top: 225px;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    top: 213px;
    left: 489px;
    transform: translate(0%, 0%);
  }
  @media only screen and (min-width: 1280px) {
    top: 216px;
    left: 143px;
  }
`;

export const EditPhoto = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    display: flex;
    gap: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.manrope.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.83;
    letter-spacing: 0.48px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const PhotoSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CheckPhotoSvg = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CrossPhotoSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.red};
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
