import styled from '@emotion/styled';
type ColorProps = {
  color: string;
};
const Wrapper = styled.div<ColorProps>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};
`;
const Divider = ({ color = 'black' }: { color: string }) => {
  return <Wrapper color={color}></Wrapper>;
};

export default Divider;
