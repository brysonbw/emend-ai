import Form from '../components/Form';
import { FormSchema } from '../lib/formSchema';

export default function Home() {
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <section className="mt-auto">
      <h1>Emend AI: A GPT3 Email Generator</h1>
      {/** Form */}
      <Form onSubmit={onSubmit} />
    </section>
  );
}
