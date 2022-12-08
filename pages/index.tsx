import Form from '../components/Form';
import { FormSchema } from '../lib/formSchema';

export default function Home() {
  const onSubmit = (data: FormSchema) => {
    console.log(data); // display form data
  };
  return (
    <main className="mt-auto">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/** Left side hero */}

        {/** Form */}
        <section className="mx-auto text-center">
          <Form onSubmit={onSubmit} />
        </section>

        {/** Right Side Hero */}
        {/**
         * // TODO: Display GPT response after successful onSubmit()
         */}
        <section className="mx-auto text-center">
          <h1>Right Side</h1>
        </section>
      </div>
    </main>
  );
}
