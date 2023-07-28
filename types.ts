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

export interface Post {
  prompt?: string;
  tag?: string;
}

export interface FormProps {
  type: string;
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
  isSubmitting: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}
