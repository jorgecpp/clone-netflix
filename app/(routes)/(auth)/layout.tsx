import { Toaster } from "sonner";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <div className="relative h-screen w-full bg-[url('/login-bg.jpg')] bg-cover bg-center">
            
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex items-center justify-center h-full text-white">
                {children}
                <Toaster/>
            </div>

        </div>
    )
}
