import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-400 px-10 py-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="globe.svg"
            alt="Logo image"
            width={80}
            height={80}
            color="white"
          />

          <h1 className="text-5xl text-white">Music Store</h1>
        </div>

        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
