import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Brand / About */}
          <div>
            <h2 className="text-base font-bold">Tannu Saini</h2>
            <p className="mt-1 text-sm text-base-content/70">
              MERN Stack Developer creating modern, responsive, and user-friendly
              web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-base font-bold">Quick Links</h2>
            <ul className="mt-1 space-y-1 text-sm">
              <li>
                <Link to="/" className="link link-hover">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">About</Link>
              </li>
              <li>
                <Link to="/projects" className="link link-hover">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-base font-bold">Connect</h2>
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/TannuSaini488"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-base-100 hover:bg-base-300 transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tannu-saini"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-base-100 hover:bg-base-300 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:tannu2005saini@gmail.com"
                className="p-1.5 rounded-lg bg-base-100 hover:bg-base-300 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-6 pt-3 text-center text-xs text-base-content/70">
          © {new Date().getFullYear()} Tannu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
