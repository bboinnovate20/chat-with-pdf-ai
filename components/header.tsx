import Link from "next/link";
import Logo from "./logo";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import LightDarkMode from "./light-dark-mode";

export default function Header() {
    return( 
    <nav className="flex justify-between bg-white shadow-sm p-5 border-b dark:bg-gray-300">
        <Link href="/dashboard" >
            <Logo/>
        </Link>
        <SignedIn>
            <div className="flex items-center space-x-2">
                <Button variant="link" className="hidden md:flex text-black">
                    <Link href="/dashboard/upgrade" >Pricing</Link>
                </Button>
                <Button variant="link" className="text-black">
                    <Link href="/dashboard/upgrade" >Document</Link>
                </Button>
                <LightDarkMode/>
                <Button  variant="outline" className="transition-all border-primary hover:bg-primary">
                    <Link href="/dashboard/upload" >
                        <FilePlus2 className="text-primary dark:text-white hover:text-white"/>
                    </Link>
                </Button>
                <div>
                    {/* Upgrade Button */}
                    <UserButton/>
                </div>
                
            </div>
        </SignedIn>
    </nav>)
}