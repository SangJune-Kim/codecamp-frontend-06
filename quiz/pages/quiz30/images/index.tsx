import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const QuizImagesPage = () => {
  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = (id) => (event) => {
    setInputs({
      ...inputs,
      [id]: event.target.value,
    });
  };

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imgUrls];
          tempUrls[number] = data.target?.result;
          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map((el) => {
        return el && uploadFile({ variables: { file: el } });
      })
    );

    const resultUrls = results.map((el) => {
      return el?.data ? el?.data?.uploadFile.url : "";
    });

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <>
      <div>
        작성자:
        <input onChange={onChangeInputs("writer")} />
      </div>
      <div>
        비밀번호:
        <input onChange={onChangeInputs("password")} />
      </div>
      <div>
        제목:
        <input onChange={onChangeInputs("title")} />
      </div>
      <div>
        내용:
        <input onChange={onChangeInputs("contents")} />
      </div>
      <div>
        <button onClick={onClickSubmit}>게시물 등록</button>
      </div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />
    </>
  );
};
export default QuizImagesPage;
