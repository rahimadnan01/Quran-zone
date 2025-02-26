import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { faqs } from "../index.js";
import { faq } from "../../assets/index.js";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 my-[5rem] ">
      {/* FAQ Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">FAQ's</h2>
        <Card className="bg-white shadow-lg">
          <CardContent>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <button
                  className="w-full text-left flex justify-between items-center font-semibold text-lg"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Illustration */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-600">FAQ</h3>
          <p className="text-lg font-semibold mt-2">DON'T HESITATE TO ASK</p>
          <div className="mt-4">
            <img src={faq} alt="FAQ Illustration" className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}
