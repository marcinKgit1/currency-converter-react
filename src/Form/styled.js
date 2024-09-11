import styled from "styled-components";

export const Wrapper = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.color.pomegranate};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.pomegranate};
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: 10px;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
  width: 100%;
  max-width: 150px;
  margin-right: 5px;
`;

export const Field = styled.input`
  border: 2px solid ${({ theme }) => theme.color.grey};
  padding: 10px;
  max-width: 300px;
  width: 100%;
  border-radius: 30px;
`;

export const Select = styled.select`
  border: 2px solid ${({ theme }) => theme.color.grey};
  padding: 10px;
  max-width: 300px;
  width: 100%;
  border-radius: 30px;
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.pomegranate};
  min-width: 25%;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.pomegranate};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
