// 목록 스타일즈 페이지

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  height: 700px;
  margin: 50px auto;
  overflow: auto;
`;

export const CommentFetchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  margin-top: 10px;
`;

export const CommentProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const CommentContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CommentFetchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentWriter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Star = styled.img`
  width: 20px;
  height: 20px;
`;

export const CommentStars = styled.div`
  margin-left: 10px;
`;

export const RatingStar = styled(Rate)``;

export const CommentContents = styled.div`
  margin-bottom: 30px;
`;

export const CommentCreatedAt = styled.div`
  margin-bottom: 30px;
`;

export const UpdateIcon = styled.img``;

export const UpdateIconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  margin-right: 10px;
`;

export const DeleteIcon = styled.img``;

export const DeleteIconButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
