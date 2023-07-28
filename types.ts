import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
} from "react";

export type ProviderProps = {
  id: string;
  name: string;
  type: string;
  signInUrl?: string;
  callbackUrl: string;
  signInUrlParams?: Record<string, string> | null;
};

export type ProvidersProps = Record<string, ProviderProps>;

export interface DropdownLinksConfigProps {
  title: string;
  href: string;
}

export interface FormProps {
  type: string;
  post: { post: string; tag: string };
  setPost: Dispatch<
    SetStateAction<{ post: string; tag: string }>
  >;
  isSubmitting: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}
