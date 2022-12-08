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

  // clear form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, onSubmit, reset]);

  return (
    // form
    <form
      id="emendAIForm"
      className="bg-white w-full flex flex-col p-10 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-main-bg text-2xl mb-2">
        Emend AI: A GPT3 Email Generator
      </h1>
      {/** recipient */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/** name */}
        <div className="flex-col w-full md:mr-5 mr-0 text-left mt-4 mb-3">
          <label className="" htmlFor="recipientName">
            Recipient name*
          </label>
          <input
            id="recipientName"
            className=""
            placeholder="e.g. John Smith"
            {...register('recipient.name')}
          />
          {errors.recipient?.name?.message && (
            <p className="text-left absolute">
              {errors.recipient.name?.message}
            </p>
          )}
        </div>
        {/** job title */}
        <div className="flex-col w-full mt-4 text-left mb-3">
          <label htmlFor="recipientJobTitle">Recipient job title</label>
          <input
            id="recipientJobTitle"
            placeholder="e.g. Hiring Manager"
            {...register('recipient.jobTitle')}
          />
          {errors.recipient?.jobTitle?.message && (
            <p className="text-left absolute">
              {errors.recipient.jobTitle?.message}
            </p>
          )}
        </div>
      </div>
      {/** summary */}
      <label htmlFor="summaryContext">Context*</label>
      {/** context */}
      <input
        id="summaryContext"
        placeholder="e.g. Checking on the status of an application"
        {...register('summary.context')}
      />
      {errors.summary?.context?.message && (
        <p>{errors.summary.context?.message}</p>
      )}
      {/** text */}
      <label htmlFor="summaryText">Text*</label>
      <textarea
        id="summaryText"
        rows={3}
        placeholder="Write a summary relating to the context you entered"
        {...register('summary.text')}
      />
      {errors.summary?.text?.message && <p>{errors.summary.text?.message}</p>}
      {/** sender */}
      <label htmlFor="senderName">Sender name*</label>
      <input
        id="senderName"
        placeholder="Enter your name"
        {...register('sender.name')}
      />
      {errors.sender?.name?.message && <p>{errors.sender.name?.message}</p>}
      {/** Submit Button */}
      <button
        className="mt-5 btn px-3 py-2 bg-main-bg rounded-md  text-white font-normal"
        type="submit"
      >
        Generate Email
      </button>
    </form>
  );
}
