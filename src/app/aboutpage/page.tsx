"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NextJsIntro from "../components/AboutComponents/NextJsIntro";
import DockerIntro from "../components/AboutComponents/DockerIntro";

export default function AboutPage(){
    return(
        <div>
            <div id="section1" className="h-screen bg-gray-200 section active">
                <NextJsIntro/>
            </div>
            <div id="section2" className="h-screen bg-gray-300 section">
                <DockerIntro/>
            </div>
            <div id="section3" className="h-screen bg-gray-400 section">
            <h2>Section 3</h2>
            </div>
        </div>
    )

};