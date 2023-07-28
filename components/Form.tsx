import { FormProps } from "@types";
import Link from "next/link";

function Form({
  type,
  post,
  setPost,
  isSubmitting,
  handleSubmit,
}: FormProps) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
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
        <label htmlFor='prompt'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>
          <textarea
            name='prompt'
            onChange={(event) =>
              setPost({
                ...post,
                prompt: event.target.value,
              })
            }
            id='prompt'
            value={post.prompt}
            placeholder='write your prompt here'
            required
            className='form_textarea'
          />
        </label>
        <label htmlFor='tag'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
            <span>(#product, #webdevelopment, #idea)</span>
          </span>
          <input
            name='tag'
            onChange={(event) =>
              setPost({
                ...post,
                tag: event.target.value,
              })
            }
            id='tag'
            value={post.tag}
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link className='text-gray-500' href={"/"}>
            Cancel
          </Link>
          <button
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
