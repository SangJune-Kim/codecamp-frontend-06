import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";
import styled from "@emotion/styled";

const schema = yup.object({
  writer: yup
    .string()
    .required("작성자를 입력하세요.")
    .max(5, "작성자는 5글자까지 가능합니다."),
  password: yup
    .string()
    .required("비밀번호를 입력하세요.")
    .matches(
      /^(?=.*\d)(?=.*\w)(?=.*[!@#$%^&*_+"|;:'/?.,]).{8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 최대 8글자까지 가능합니다."
    ),
  title: yup
    .string()
    .required("제목을 입력하세요.")
    .max(100, "제목은 100글자까지 가능합니다."),
  contents: yup
    .string()
    .required("내용을 입력하세요.")
    .max(1000, "내용은 1000글자까지 가능합니다."),
});

interface IFormValues {
  writer?: string;
}

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export default function QuizReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자: <Input01 type="text" register={register("writer")} />
        <Error>{formState.errors.writer?.message}</Error>
      </div>
      <div>
        비밀번호: <Input01 type="password" register={register("password")} />
        <Error>{formState.errors.password?.message}</Error>
      </div>
      <div>
        제목: <Input01 type="text" register={register("title")} />
        <Error>{formState.errors.title?.message}</Error>
      </div>
      <div>
        내용: <Input01 type="text" register={register("contents")} />
        <Error>{formState.errors.contents?.message}</Error>
      </div>
      <div>
        <Button01 isActive={formState.isValid} title="게시물 등록" />
      </div>
    </form>
  );
}
