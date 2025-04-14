import { useState } from "react";

const faqs = [
    {
        question: "Who can create an election?",
        answer:
            "Anyone with a valid organizer account can create and manage elections. Organizers must verify their identity before hosting.",
    },
    {
        question: "How do I register as an organizer?",
        answer:
            "Click on the 'Register as Organizer' button on the homepage. You'll need to provide basic details, verify your identity, and accept our terms of service.",
    },
    {
        question: "Is there a verification process after I register?",
        answer:
            "Yes, we verify organizer identities to ensure election integrity. Verification may include email confirmation, mobile OTP, or document uploads.",
    },
    {
        question: "Can I control when voting starts and ends?",
        answer:
            "Yes. You can schedule voting start and end times, set time zones, and even enable early voting if needed.",
    },
    {
        question: "Is this platform secure?",
        answer:
            "Absolutely. We use modern encryption, user authentication, and audit trails to ensure the integrity and security of every election.",
    },
    {
        question: "How much does it cost to host an election?",
        answer:
            "Pricing depends on the scale and type of election.Visit our Register page for more info.",
    },
];


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" bg-amber-100 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <span className="text-lg font-semibold text-gray-800">
                                    {faq.question}
                                </span>
                                <span className="text-2xl text-gray-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                className={`px-6 text-gray-600 transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-40 py-2" : "max-h-0"
                                    }`}
                            >
                                <p className="leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
