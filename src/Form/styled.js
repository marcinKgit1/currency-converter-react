import styled from "styled-components";

export const Wrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Legend = styled.legend`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.textPrimary};
  margin-bottom: 24px;
  text-align: center;
  background: linear-gradient(to right, #9333EA, #14B8A6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  display: block;
  font-size: 0.95rem;
  margin-bottom: 8px;
  font-weight: 500;
`;

const inputStyles = `
  width: 100%;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: #F8FAFC;
  font-size: 1rem;
  font-family: 'Outfit', sans-serif;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #9333EA;
    box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.1);
    background: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Field = styled.input`
  ${inputStyles}
`;

export const Select = styled.select`
  ${inputStyles}
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;

  option {
    background: #0F172A;
    color: #F8FAFC;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 10px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.secondary});
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -10px rgba(147, 51, 234, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px -10px rgba(147, 51, 234, 0.6);
    filter: brightness(110%);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(95%);
  }
`;

export const Loading = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  padding: 40px 0;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.error};
  text-align: center;
  padding: 40px 0;
  font-size: 1.2rem;
  line-height: 1.5;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(239, 68, 68, 0.2);
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;
  font-size: 0.85rem;
  margin-top: 24px;
  opacity: 0.8;
  font-weight: 300;
`;
