import React, {
  Dispatch,
  EventHandler,
  FormEventHandler,
  SetStateAction,
} from "react";

interface FormProps {
  type: string;
  post: { post: string; tag: string };
  setPost: Dispatch<
    SetStateAction<{ post: string; tag: string }>
  >;
  isSubmitting: boolean;
  handleSubmit: FormEventHandler<HTMLInputElement>;
}

function Form({
  type,
  post,
  setPost,
  isSubmitting,
  handleSubmit,
}: FormProps) {
  return <div>Form</div>;
}

export default Form;
