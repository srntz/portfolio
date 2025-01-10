'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";
import {NavigationContext} from "@/context/NavigationContext";

export default function NavigationProvider({children}:{children: React.ReactNode}) {
  const router = useRouter();
  const [exitSequence, setExitSequence] = useState(false);

  function navigate(path: string, exitSequenceDuration: number = 1000) {
    setExitSequence(true);
    setTimeout(() => {{setExitSequence(false); router.push(path)}}, exitSequenceDuration);
  }

  return (
    <NavigationContext.Provider value={{exitSequence, setExitSequence, navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}
