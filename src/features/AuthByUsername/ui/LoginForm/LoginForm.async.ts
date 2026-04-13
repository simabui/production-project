import { lazy } from "react";
import { LoginFormProps } from "./LoginForm";

const LoginFormAsync = lazy<React.FC<LoginFormProps>>(() => import("./LoginForm"));
export default LoginFormAsync;
