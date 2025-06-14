/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userAuthentication } from "@/api/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie, setCookie } from "cookies-next";
import { loginSchema } from "../registerForm/RegisterForm.utils";
import { LoginFormWrapper } from "./LoginForm.style";
import Input from "@/ui/input/Input";
import Button from "@/ui/button/Button";
import { Dispatch, useEffect } from "react";
import useAnimation from "@/hooks/useAnimation";
import Animation from "@/ui/animation/Animation";

interface ILogin {
  setModalOpen: Dispatch<boolean>;
}
export const LoginForm = ({ setModalOpen }: ILogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema) as any,
  });
  const router = useRouter();
  const userId = getCookie("userid") as any;
  const [AnimationOpen, setAnimationOpen, toggleAnimation] =
    useAnimation(false);

  const onSubmit = async (data: any) => {
    const userDataLogin = {
      t: 1,
      username: data.email,
      password: data.password,
    };
    const response = await userAuthentication(userDataLogin);
    toggleAnimation();
    response()
      .then((resp: any) => {
        setCookie("userid", resp.data.user[0].user_id ?? "", {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          path: "/",
        });
        setTimeout(() => {
          router.push("/home");
        }, 100);
        setAnimationOpen(false);
      })
      .catch((err: any) => {
        console.error("Login failed:", err);
        setAnimationOpen(false);
      });
  };

  useEffect(() => {
    if (userId) {
      router.push("/home");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <LoginFormWrapper>
      <h2 className="title">Iniciar sesión</h2>
      <p className="subtitle">Ingresa tus datos para acceder a tu cuenta</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label={"Correo electrónico"}
          registerName={"email"}
          placeholder="tu@email.com"
          register={register}
          errors={errors.email?.message}
        />
        <Input
          type="password"
          label={"Contraseña"}
          registerName={"password"}
          placeholder="*********"
          register={register}
          errors={errors.password?.message}
        />
        <p className="forget_password" onClick={() => setModalOpen(true)}>
          ¿Olvidaste tu contraseña?
        </p>
        <Button size={"fluid"} color={"primary"} type={"submit"}>
          <span>Iniciar sesión</span>
        </Button>
      </form>
      <Animation isActive={AnimationOpen} />
    </LoginFormWrapper>
  );
};
