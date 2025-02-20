import { Mail, User } from "lucide-react";

const mailContacts = [
  { name: "Olivia Turner", handle: "olivia@example.com", link: "mailto:olivia@example.com", image: "" },
  { name: "Ethan Walker", handle: "ethan@example.com", link: "mailto:ethan@example.com", image: "" },
  { name: "Liam Harris", handle: "liam@example.com", link: "mailto:liam@example.com", image: "" },
];

const MailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Mail size={80} className="text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-6">Email Contacts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {mailContacts.map((contact, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            {contact.image ? (
              <img src={contact.image} alt={contact.name} className="w-24 h-24 rounded-full mb-4" />
            ) : (
              <User className="w-24 h-24 text-gray-500 mb-4" />
            )}
            <h2 className="text-xl font-semibold">
              <a href={contact.link} className="text-primary hover:underline">
                {contact.name}
              </a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              <a href={contact.link} className="hover:underline">
                {contact.handle}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailPage;
