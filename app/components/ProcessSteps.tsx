import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  steps: Step[];
}

export default function ProcessSteps({
  title = "خطوات العمل",
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl p-6 shadow-lg h-full">
                <div className="absolute -top-4 -start-4 bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                <CheckCircle2 className="w-8 h-8 mb-4 mt-4" />

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








