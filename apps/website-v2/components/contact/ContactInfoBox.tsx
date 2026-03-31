type ContactInfoBoxProps = {
  eyebrow: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  area: string;
  notes: string[];
};

export default function ContactInfoBox({
  eyebrow,
  title,
  description,
  phone,
  email,
  area,
  notes,
}: ContactInfoBoxProps): React.JSX.Element {
  return (
    <div className="space-y-8 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="space-y-4">
        <p className="text-lg font-medium text-slate-700 sm:text-xl">{eyebrow}</p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">{description}</p>
      </div>

      <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-5">
        <p className="text-lg text-slate-700">Telefon</p>
        <a href={`tel:${phone}`} className="text-3xl font-semibold leading-tight text-slate-900">
          {phone}
        </a>
      </div>

      <div className="space-y-2 text-xl leading-relaxed text-slate-800">
        <p>E-Mail: {email}</p>
        <p>Einsatzgebiet: {area}</p>
      </div>

      <ul className="space-y-2 text-lg leading-relaxed text-slate-700">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
