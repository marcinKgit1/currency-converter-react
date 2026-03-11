import styled from "styled-components";

export const Outcome = styled.div`
  margin-top: 32px;
  padding: 24px;
  background: ${({ theme }) => theme.color.surfaceDarker};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.border};
  text-align: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.textPrimary};
  box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.2);

  strong {
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.8rem;
    display: block;
    margin-top: 10px;
  }
`;
