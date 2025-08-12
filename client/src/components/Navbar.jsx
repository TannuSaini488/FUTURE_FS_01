import { Link } from "react-router-dom";
import { House, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to={"/"}
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <House className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Home</h1>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link to={"/about"} className={`gap-3`}>
              <span className="hidden sm:inline">About</span>
            </Link>
            <Link to={"/projects"} className={`gap-3`}>
              <span className="hidden sm:inline">Projects</span>
            </Link>
            <Link to={"/resume"} className={`gap-3`}>
              <span className="hidden sm:inline">Resume</span>
            </Link>
            <Link to={"/contact"} className={`gap-3`}>
              <span className="hidden sm:inline">Contact me</span>
            </Link>
            <Link
              to={"/settings"}
              className={`
              gap-3 transition-colors
              `}
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
