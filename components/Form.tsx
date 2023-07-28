import { FormProps } from "@types";

function Form({
  type,
  post,
  setPost,
  isSubmitting,
  handleSubmit,
}: FormProps) {
  return (
    <section className='w-full max-w-full flex-start'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Modi totam officiis voluptate, omnis ipsam
        rerum sunt commodi eveniet molestias nulla,
        reprehenderit at quod quibusdam illum facere eum
        ipsum minima optio!
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor=''>
          <span>Your AI Prompt</span>
        </label>
      </form>
    </section>
  );
}

export default Form;
