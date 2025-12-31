import Link from "next/link";

const steps = [
  {
    title: "Find Your Inspiration",
    description:
      "Think about the occasion, colors, and style you’re looking for. Browse the gallery for inspiration or come with your own ideas.",
  },
  {
    title: "Request Your Bouquet",
    description:
      "Submit an order request, through this website or via instagram DMs, with details like your budget, preferred colors, and the date you need it. Every bouquet is custom-made.",
  },
  {
    title: "Confirmation & Details",
    description:
      "You’ll receive a response to confirm availability, pricing, payment and final details before your bouquet is created.",
  },
  {
    title: "Creation & Pickup",
    description:
      "Once confirmed, your bouquet is thoughtfully arranged and prepared for pickup or delivery within the Central Valley.",
  },
];

export default function HowToOrderPage() {
  return (
    <main className="min-h-screen px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl mb-12 text-center">How to Order</h1>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-sm">
                {index + 1}
              </div>

              <div>
                <h2 className="text-xl mb-2">{step.title}</h2>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA placeholder — link later */}
        <div className="mt-16 flex flex-col items-center gap-4">
          {/* Primary CTA – Google Form (placeholder for now) */} 
          <a 
            href="https://docs.google.com/forms/d/1C6qY_eDhqowr34cv_ak6qVuvX4XjrSRJcMyYMoSaO0M/edit" 
            target="_blank" 
            className="px-8 py-3 bg-emerald-700 text-white rounded-full hover:opacity-90 transition" 
          > 
            Request a Bouquet
          </a> 
          
          {/* Secondary CTA – Instagram */} 
          <a 
            href="https://instagram.com/_thebloomsbar_" 
            target="_blank" 
            className="px-7 py-3 border border-neutral-600 text-neutral-900 rounded-full hover:bg-neutral-100 transition" 
          > 
            Order via Instagram 
          </a> 
        </div>
      </div>
    </main>
  );
}