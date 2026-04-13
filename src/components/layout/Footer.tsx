"use client";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { personalInfo } from "@/data/personal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Pedro Henrique. Built with Next.js &amp; TailwindCSS.
        </p>

        <div className="flex gap-1">
          <SocialIcon href={personalInfo.github} label="GitHub">
            <FiGithub className="text-lg" />
          </SocialIcon>
          <SocialIcon href={personalInfo.linkedin} label="LinkedIn">
            <FiLinkedin className="text-lg" />
          </SocialIcon>
          <SocialIcon href={personalInfo.instagram} label="Instagram">
            <FiInstagram className="text-lg" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
