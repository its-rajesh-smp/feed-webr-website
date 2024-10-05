import { AuthStep, AuthStepDetails } from "../types/authStep.type";

export const AuthSteps: Record<AuthStep, AuthStep> = {
  Login: "Login",
  Register: "Register",
  OTPVerification: "OTPVerification",
};

export const AuthStepDescriptions: Record<AuthStep, AuthStepDetails> = {
  Login: {
    title: "Welcome Back ",
    description: "Enter your credentials to continue",
  },
  Register: {
    title: "Get Started ",
    description: "Enter your credentials to register",
  },
  OTPVerification: {
    title: "Verify Your Account ",
    description: "Enter the verification code sent to your email",
  },
};
