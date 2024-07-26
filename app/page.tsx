import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import UserSteps from "@/components/user-step";
import CustomSingleFeature, { Features } from '../components/feature';
import { FileText, Zap, Brain, ServerCogIcon, MonitorSmartphoneIcon, EyeIcon } from "lucide-react";


const features = [
  {
    'title': 'Share your PDF Documents',
    'content': 'Keep all your important PDF files securely stored and easily accessible anytime anywhere',
    'icon': <FileText size={32}/>
  },
  {
    'title': 'Blazing Fast Responses',
    'content': 'Experience lightning fast answers to your queries ensuring you got the information you need instantly',
    'icon': <Zap size={32}/>
  },
  {
    'title': 'Chat Memorization',
    'content': 'Our Intelligence Chatbot remembers previous interactions, providing a seamless and personalized experience',
    'icon': <Brain size={32}/>
  },
  {
    'title': 'Interactive PDF Viewer',
    'content': 'Engage with your PDFs like never before using our intuitive and interactive viewer',
    'icon': <EyeIcon size={32}/>
  },
  {
    'title': 'Cloud Backup',
    'content': 'Yes! We got you on everything on backing up. Fast and knowing your document are safely backed up on the cloud, protected from loss or damage',
    'icon': <ServerCogIcon size={32}/>
  },
  {
    'title': 'Responsive Across Devices',
    'content': 'Not the traditional platform! Access and chat with your PDFs seamlessly on any device where its your desktop, tablet, or smartphone',
    'icon': <MonitorSmartphoneIcon size={32}/>
  }

]



export default function Home() {
  
  
  return (
    <main className="p-2 md:p-5 flex-1 scroll-m-0  bg-white">
      <div className="bg-white flex my-2 flex-col p-5 mt-9 ">
        
          <MainHeadline/>
          <CaseStudyImage/>
      </div>

        <Features features={features}/>
    </main>
  );
}








const CaseStudyImage = () => (
    <div className="my-5 md:my-20 overflow-hidden">
      <Image
        src="https://i.imgur.com/VciRSTI.jpeg"
        width={2432}
        height={1442}
        alt="Chat with PDF Screenshot"
        className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
      />
      <div aria-hidden="true" className="relative">
        <div className="absolute bottom-[-2px] -inset-x-96 bg-gradient-to-t from-white/95 pt-[10%] max-w-[1600px]" />
      </div>
    </div>

)

const MainHeadline = () => (
  <div className="md:grid grid-cols-[3fr_2fr] ">
          <div>
            <p className="animate-slide-down text-blue-500">Your Interactive Document Companion!</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight transition-all animate-slide-down delay-100
                text-gray-900 sm:text-6xl mb-4">Your Interactive Document Companion</h1>
            <p className="animate-slide-down delay-200">Introducing Chat with PDF <span className="text-indigo-600">Chat with PDF</span> </p> 
            
            <div className="my-5 mt-6">
              <UserSteps/>
            </div>
            
            <Link href="/dashboard"  className={buttonVariants({ variant: "default", className: "p-10 py-6 w-full  md:w-72 md:py-7" })}>Get Started</Link>
          </div>
          <div className="hidden md:grid object-cover  place-content-center">
              <Image
              className="w-full"
                src='/images/chat-with-pdf-header.png'
                width={300}
                height={300}
                alt="Chat with PDF Image"

              />
          </div>
          
        </div>
)