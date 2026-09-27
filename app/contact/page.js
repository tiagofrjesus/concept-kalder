import PageHero from '@/components/PageHero';
import { content } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Talk to a Kalder applications engineer about sensor selection, integration and Kalder Sense licensing.',
  alternates: { canonical: '/contact' },
};

const CHECKLIST = [
  'The application and the asset being monitored',
  'Operating environment: temperature range, IP rating, hazardous zone',
  'Expected quantities and deployment timeline',
  'Integration protocol, e.g. Modbus TCP, EtherCAT or 4–20 mA',
];

export default function ContactPage() {
  const { contact } = content;

  return (
    <>
      <PageHero eyebrow="Contact" title={contact.heading} lead={contact.body} crumbs={[{ label: 'Contact' }]} />
      <section className="section">
        <div className="container split">
          <div className="contact">
            <h2 className="subhead">Applications engineering</h2>
            <a href={`mailto:${contact.email}`} className="contact__mail">
              {contact.email}
            </a>
            <h2 className="subhead">Headquarters and factory</h2>
            <address className="contact__addr">{contact.address}</address>
          </div>
          <div>
            <h2 className="subhead">What to include in your enquiry</h2>
            <ol className="checklist">
              {CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
