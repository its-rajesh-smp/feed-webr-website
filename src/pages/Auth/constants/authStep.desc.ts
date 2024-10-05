import { StepDescriptionProps } from "../components/RightSide/components/UI/StepDescription";

export type AuthStep = "Login" | "Register" | "OTPVerification";

export const AuthStepDescriptions: { [Key in AuthStep]: StepDescriptionProps } =
  {
    Login: {
      title: "Welcome Back ",
      description: "Enter your credentials to continue",
      alignment: "center",
    },
    Register: {
      title: "Get Started ",
      description: "Enter your credentials to register",
      alignment: "center",
    },
    OTPVerification: {
      title: "Verify Your Account ",
      description: "Enter the verification code sent to your email",
      alignment: "center",
    },
  };
