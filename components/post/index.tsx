import styled from '@emotion/styled';
import {
  ChatBubbleOutline,
  CheckCircle,
  FavoriteBorderOutlined,
  ShareOutlined
} from '@mui/icons-material';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import Divider from '../divider';

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 17%);
  margin-bottom: 15px;
  box-sizing: border-box;
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow-x: hidden;
`;
const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0px 5px;
`;
const CustomImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;
const Info = styled.div`
  overflow-x: hidden;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text = styled.div`
  margin-top: 5px;
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  word-break: break-all;
`;

// const TextContent = styled.
const Media = styled.div`
  width: 100%;
`;
const Interactive = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TotalLike = styled.div`
  width: 50%;
  padding: 2px 5px;
`;
const TotalComments = styled.div`
  margin-right: 15px;
`;
const Action = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;
interface IMG {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
  author?: string;
}
const itemData: IMG[] = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern'
  }
];
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}
const BtnAction = styled(Button)`
  width: 30%;
  height: 40px;
  margin: 0 10px;
  background-color: white;
  text-transform: none;
  &:hover {
    background-color: #f3f3f3;
  }
`;
const Post = () => {
  return (
    <Wrapper>
      <Header>
        <Avatar>
          <CustomImg
            loader={({ src }) => {
              return src;
            }}
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt=""
            width={60}
            height={60}
          />
        </Avatar>
        <Info>
          <Typography variant="h6" fontWeight={600}>
            Ta Huu Hao <CheckCircle fontSize="small" sx={{ color: 'blue' }} />
          </Typography>
          <Typography variant="subtitle2">3 gio truoc</Typography>
        </Info>
      </Header>
      <Body>
        <Text>
          <Typography
            sx={{
              wordBreak: 'break-word'
            }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            expedita ex, atque eaque tempore quidem, qui cupiditate laborum sunt
            nisi perferendis perspiciatis! Hic praesentium impedit quaerat
            possimus asperiores beatae at?
          </Typography>
        </Text>
        <Divider color="lightGray" />
        <Media>
          <ImageList
            sx={{ height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}>
                <Image
                  loader={(item) => {
                    return item.src;
                  }}
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  // src={item.img}
                  alt={item.title}
                  fill
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Media>
        <Interactive>
          <TotalLike>
            <Typography>Bạn và 18 người khác thích bài viết</Typography>
          </TotalLike>
          <TotalComments>
            <Typography>26 comments</Typography>
          </TotalComments>
        </Interactive>
        <Divider color="lightGray" />
        <Action>
          <BtnAction
            startIcon={<FavoriteBorderOutlined sx={{ color: '#65576B' }} />}>
            <Typography fontWeight={600} sx={{ color: '#65676B' }}>
              Like
            </Typography>
          </BtnAction>
          <BtnAction
            startIcon={<ChatBubbleOutline sx={{ color: '#65576B' }} />}>
            <Typography fontWeight={600} sx={{ color: '#65676B' }}>
              Comments
            </Typography>
          </BtnAction>
          <BtnAction startIcon={<ShareOutlined sx={{ color: '#65576B' }} />}>
            <Typography fontWeight={600} sx={{ color: '#65676B' }}>
              Share
            </Typography>
          </BtnAction>
        </Action>
      </Body>
    </Wrapper>
  );
};

export default Post;
