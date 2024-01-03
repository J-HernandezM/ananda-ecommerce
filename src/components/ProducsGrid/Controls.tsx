/** @jsxImportSource @emotion/react */
'use-client';

import styled from '@emotion/styled';
import { ChangeEventHandler } from 'react';

type ControlsProps = {
  title: string,
  value: string,
  onChange: ChangeEventHandler<HTMLSelectElement>,
};

const Controls: React.FC<ControlsProps> = ({ title, value, onChange }) => (
  <Wrapper className="controls">
    <Title>{title}</Title>
    <select
      onChange={onChange}
      name="sort-by"
      id="sort-by"
      defaultValue={value ? value : 'default'}
    >
      <option value="default">Orden por defecto</option>
      <option value="popularity">Ordenar por popularidad</option>
      <option value="price-low">Ordenar por precio: bajo a alto</option>
      <option value="price-high">Ordenar por precio: alto a bajo</option>
    </select>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 1370px; */
  align-items: center;

  & select {
    height: fit-content;
    width: 170px;

    @media (min-width: 600px) {
      width: 250px;
    }
  }
`;

const Title = styled.h2`
  font-family: var(--font-abnormal-n);
  font-size: var(--xl);
  padding: 4px 0;
  color: var(--secondary);

  @media (min-width: 600px) {
    padding: 8px 0;
  }
`;

export default Controls;
