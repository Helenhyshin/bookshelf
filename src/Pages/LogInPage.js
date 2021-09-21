import React from "react";
import LogInForm from "../components/Forms/LogInForm";

const LogInPage = (props) => {
  const { userList } = props;
  console.log(props);
  return (
    <div>
      <LogInForm userList={userList} />
    </div>
  );
};

export default LogInPage;
