import styled from '@emotion/styled';
import { SearchOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  max-width: 600px;
  background-color: white;
  border-radius: 50px;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: #ebebeb;
`;
const BoxSearch = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  transform: translateY(0);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Search = () => {
  return (
    <Wrapper>
      <Tooltip title="Search">
        <Input placeholder="Search ..." />
      </Tooltip>
      <BoxSearch>
        <SearchOutlined fontSize="medium" sx={{ color: 'gray' }} />
      </BoxSearch>
    </Wrapper>
  );
};

export default Search;
