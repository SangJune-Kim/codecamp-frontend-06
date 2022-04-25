import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserExampleLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function QuizLoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}
