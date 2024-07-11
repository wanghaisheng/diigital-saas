import Logo from "./Logo";
import UserButton from "./UserButton";
import DarkModeToggle from "./DarkModeToggle";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* LanguageSelect */}

          {/* Session */}
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}

          {/* User Button */}
          <DarkModeToggle />
          <UserButton session={session} />
          <UpgradeBanner />
        </div>
      </nav>
    </header>
  );
}

export default Header;
