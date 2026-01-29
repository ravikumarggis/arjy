import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return redirect("/home");
}
