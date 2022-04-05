import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px auto;
`;

export const BoardDetailCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const CommentIcon = styled.img`
  margin-right: 10px;
`;

export const CommentInfo = styled.div`
  margin-bottom: 20px;
`;

export const CommentContentsWrapper = styled.div``;

export const CommentWriterInput = styled.input`
  width: 180px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;

export const CommentPasswordInput = styled.input`
  width: 180px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;

export const CommentContentsInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;

export const CommentRegisterWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CommentRegisterButton = styled.button`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
