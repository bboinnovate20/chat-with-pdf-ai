import { Check } from "lucide-react";


const steps = [
    "Upload your document",
    "Let Our AI chatbot analyze it",
    "Our Chatbot will Answer questions about the document",
    "Respond to your queries on every part",
    "Enhances your Productivity 10x with Guaranteed Accuracy"
]

export default function UserSteps() {
    return (
        <div>
            
            {steps.map((step, index) => <EachStep key={index} text={step} slide={(0.45 * index).toString()}/>)}

        </div>
    )
  }

const EachStep = ({text, slide}: {text: string, slide: string}) => (
    <div className={`flex opacity-0 flex-row gap-4 relative min-h-[3.5rem] animate-slide-down `} 
            style={{animationDelay: `${slide}s`, animationFillMode: 'both'}}>
        <div className="relative w-6 ]">
            <span className="absolute w-1 bg-blue-600 min-h-[4rem] left-3"></span>
            <Check className="bg-blue-950 text-white rounded-full p-1 text-lg absolute right-0 left-0" size={25}/>
        </div>
            <p className="font-medium">{text}</p>
    </div>
)