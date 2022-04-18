import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
`;

export const BoardWrapper = styled.div`
  height: auto;
  border: 1px solid white;
  box-shadow: 0px 4px 20px gray;
  display: flex;
  flex-direction: column;
  padding: 80px 102px 80px 102px;
  margin-bottom: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: 60px;
`;

export const Profile = styled.div``;

export const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  margin-right: 20px;
`;

export const Writer = styled.div``;
export const CreatedAt = styled.div``;
export const LinkIcon = styled.img`
  margin-right: 20px;
`;
export const LocationIcon = styled.img``;
export const ContentsWrapper = styled.div``;
export const TitleInput = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 30px;
`;

// 이미지 부분
export const ImgWrapper = styled.div`
  width: 100%;
  height: 480px;
  margin-bottom: 30px;
`;

export const UploadImage = styled.img``;

export const ContentsInput = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export const YoutubeBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Youtube = styled(ReactPlayer)``;

export const LikeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const LikeButton = styled.button`
  background-color: white;
  border: 0px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: #ffd600;
  cursor: pointer;
`;

export const LikeNumber = styled.div`
  margin-top: 10px;
  color: #ffd600;
`;

export const disLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const disLikeButton = styled.button`
  background-color: white;
  border: 0px;
`;

export const disLikeIcon = styled(DislikeOutlined)`
  font-size: 20px;
  color: #828282;
  cursor: pointer;
`;

export const disLikeNumber = styled.div`
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 50px;
  margin-bottom: 30px;
`;

export const ListButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 179px;
  height: 45px;
  margin-right: 20px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 179px;
  height: 45px;
  margin-right: 20px;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  width: 179px;
  height: 45px;
  cursor: pointer;
`;
