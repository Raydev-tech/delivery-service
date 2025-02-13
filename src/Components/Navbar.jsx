import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://kmpcdjoavvncymmqwbra.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttcGNkam9hdnZuY3ltbXF3YnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NDkwMTksImV4cCI6MjA1MjQyNTAxOX0.hbB-IcXludyzs82H4aCzaEfju-EGePEHOQMa0ZxsVKI"
);

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/servicepage" },
  { name: "Contact", href: "/contactus" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="bg-gray-600">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 border-b border-white"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqtB_lYcjXILgO-fRoGaxFhDzoRsYqxBgTQ&s"
                className="h-9 w-auto"
                alt="Logo"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              className="-m-2.5 p-2.5 text-white border border-white rounded-md"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white border border-transparent hover:border-white px-3 py-1 rounded"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section: Notifications & User Profile OR Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            {user ? (
              <>
                {/* Notification Button */}
                <button className="relative p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white focus:ring-2 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>

                {/* User Profile */}
                <div className="relative ml-3">
                  <button className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.user_metadata?.avatar_url || "https://via.placeholder.com/40"}
                      alt="User Avatar"
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                      Your Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                      Settings
                    </a>
                    <button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        setUser(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <a
                href="/login"
                className="text-sm font-semibold text-white border border-white px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                Log in →
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 w-full bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqtB_lYcjXILgO-fRoGaxFhDzoRsYqxBgTQ&s" alt="Logo" />
              </a>
              <button className="-m-2.5 p-2.5 text-white border border-white rounded-md" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-semibold text-white border border-transparent hover:border-white rounded">
                  {item.name}
                </a>
              ))}
              <div className="mt-4">
                {user ? (
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setUser(null);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-semibold text-white border border-white hover:bg-white hover:text-black rounded"
                  >
                    Sign out
                  </button>
                ) : (
                  <a href="/login" className="block w-full px-3 py-2 text-base font-semibold text-white border border-white hover:bg-white hover:text-black rounded">
                    Log in
                  </a>
                )}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
