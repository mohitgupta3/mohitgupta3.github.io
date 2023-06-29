"use client"

import Image from 'next/image';
import HomeButton from "@/components/homeButton"
import PythonIcon from "@/components/shared/icons/python.svg"
import NodeIcon from "@/components/shared/icons/nodejs.svg"

export default function About() {
    return (
      <main className="min-h-screen flex-col items-center p-24">
        <div className="z-10 flex w-full max-w-full mb-10 items-center justify-between font-mono text-sm lg:flex">
          <h2 className="flex-auto text-4xl font-semibold">About Me</h2>
          <HomeButton />
        </div>
        <p className="font-mono mb-3">Originating from <span className="hover:underline text-sky-400" style={{"cursor": "zoom-in"}}>Kotdwar, India</span>,</p>
        <p className="font-mono mb-3">I am a skilled <kbd className="hover:overline">AI Engineer</kbd> and a <kbd className="hover:overline">Technical Consultant</kbd> with four years of experience.</p>
        <p className="font-mono mb-3">I have worked in <kbd className="hover:overline">FinTech and eCommerce</kbd>, specializing in <kbd className="hover:overline">Document analysis systems and person pose estimation and analysis</kbd>.</p>
        <p className="font-mono mb-3"> My expertise includes <kbd className="hover:overline"> Machine Learning</kbd>, <kbd className="hover:overline"> Deep Learning</kbd>, <kbd className="hover:overline">Computer Vision</kbd>, and <kbd className="hover:overline">Generative AI</kbd>.</p>
        <div className="flex mb-3">
          <p className="font-mono">
            I have built robust <kbd className="hover:overline">APIs</kbd> and <kbd className="hover:overline">web applications</kbd> with <kbd className="hover:overline">Python</kbd>
          </p>&nbsp;
          <Image
            priority
            src={PythonIcon}
            style={{"width":"1rem", "height":"auto"}}
            alt=" "
          />&nbsp;
          <p className="font-mono">and <kbd className="hover:overline">Node.js</kbd></p>&nbsp;
          <Image
            priority
            src={NodeIcon}
            style={{"width":"auto", "height":"2rem"}}
            alt=" "
          />
          <p className="font-mono">.</p>
        </div>
        <p className="font-mono mb-3">Overall, I have a strong background in <kbd className="hover:overline">AI engineering</kbd> and a track record of leading high-performance teams.</p>
    </main>
    )
}