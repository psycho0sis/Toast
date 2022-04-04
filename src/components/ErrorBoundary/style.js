import styled from 'styled-components';
import { theme } from '@/theme';

export const ErrorWrapper = styled.h3`
  border-bottom: ${({ theme }) => theme.spacing[4]}px solid ${theme.colors.progressBar};
  padding: ${({ theme }) => theme.spacing[4]}px;
  text-align: right;
`;
