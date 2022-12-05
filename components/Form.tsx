import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormSchema, formSchema } from '../lib/formSchema';

type Props = {
  onSubmit: (data: FormSchema) => void;
};

export default function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, onSubmit, reset]);

  return (
    <form
      id="emendAIForm"
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/** recipient */}
      <input placeholder="recipient name" {...register('recipient.name')} />
      {errors.recipient?.name?.message && (
        <p>{errors.recipient.name?.message}</p>
      )}
      <input
        placeholder="recipient job title"
        {...register('recipient.jobTitle')}
      />
      {errors.recipient?.jobTitle?.message && (
        <p>{errors.recipient.jobTitle?.message}</p>
      )}
      {/** sender */}
      <input placeholder="sender name" {...register('sender.name')} />
      {errors.sender?.name?.message && <p>{errors.sender.name?.message}</p>}
      {/** summary */}
      <input placeholder="summary context" {...register('summary.context')} />
      {errors.summary?.context?.message && (
        <p>{errors.summary.context?.message}</p>
      )}
      <input placeholder="summary text" {...register('summary.text')} />
      {errors.summary?.text?.message && <p>{errors.summary.text?.message}</p>}
      {/** Submit Button */}
      <button
        className="text-white mt-5 btn px-3 py-2 bg-primary rounded-md hover:bg-white hover:text-black"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
