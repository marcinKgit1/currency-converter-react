import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  font-family: inherit;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.surface};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
`;
