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

export interface Creator {
  _id: string;
  email: string;
  username: string;
  image: string;
}

export interface PromptProps {
  _id: string;
  creator: Creator;
  tag: string;
  prompt: string;
}

export interface PromptCardProps {
  post: PromptProps;
  handleTagClick?: (tag: string) => void;
  handleEdit?: (post: PromptProps) => void;
  handleDelete?: (post: PromptProps) => void;
}

export interface ProfileProps {
  name: string;
  desc: string;
  data: PromptProps[];
  setPosts: any;
}
