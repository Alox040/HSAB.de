type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  submit: string;
};

type ContactFormPlaceholders = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  title: string;
  description: string;
  labels: ContactFormLabels;
  placeholders: ContactFormPlaceholders;
};

export default function ContactForm({
  title,
  description,
  labels,
  placeholders,
}: ContactFormProps): React.JSX.Element {
  return (
    <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">{description}</p>
      <form className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-lg font-medium text-slate-800">
            {labels.name}
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder={placeholders.name}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-lg font-medium text-slate-800">
            {labels.email}
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder={placeholders.email}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-message" className="block text-lg font-medium text-slate-800">
            {labels.message}
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder={placeholders.message}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-500"
          />
        </div>
        <button
          type="button"
          className="inline-flex min-h-12 items-center rounded-lg border border-slate-300 px-6 py-3 text-lg font-medium text-slate-900"
        >
          {labels.submit}
        </button>
      </form>
    </div>
  );
}
