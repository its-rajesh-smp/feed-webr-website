export type AuthStep = "Login" | "Register" | "OTPVerification";

export interface AuthStepDetails {
  title?: string;
  description?: string;
}
