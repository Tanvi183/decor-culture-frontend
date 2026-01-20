'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ToastProvider from '../components/ToastProvider.jsx';
import Swal from 'sweetalert2';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = (e) => {
    e.preventDefault();
    
    Swal.fire({
      title: 'Sign Out',
      text: 'Are you sure you want to sign out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3d5c4d',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/signin');
      }
    });
  };

  const sidebarItems = [
    {
      href: '/dashboard',
      icon: 'person',
      label: 'My Profile'
    },
    {
      href: '/dashboard/products',
      icon: 'inventory_2',
      label: 'Product Management'
    },
    {
      href: '/dashboard/payments',
      icon: 'credit_card',
      label: 'Payment Methods'
    },
    {
      href: '/signin',
      icon: 'logout',
      label: 'Sign out',
      isSignOut: true,
      onClick: handleSignOut
    }
  ];

  return (
    <>
      {/* Material Symbols font for dashboard only */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet" 
      />
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      
      <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-[#1a1a1a] text-[#141514] dark:text-white antialiased">
        {/* Top Banner */}
        <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
          GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
        </div>

        <Header />

        <main className="flex-1 flex max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-10 gap-12">
          {/* SideNavBar */}
          <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#717a75] mb-2 px-3">
                Account Settings
              </p>
              {sidebarItems.map((item, index) => (
                item.isSignOut ? (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-[#717a75] hover:text-red-500 text-left"
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      pathname === item.href
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'hover:bg-[#f2f3f2] dark:hover:bg-[#2a2a2a]'
                    }`}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className={`text-sm ${
                      pathname === item.href ? 'font-semibold' : 'font-medium'
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                )
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="flex-1 flex flex-col gap-10">
            {children}
          </section>
        </main>

        <footer className="w-full border-t border-[#f2f3f2] dark:border-[#333] px-6 lg:px-20 py-10 mt-20">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#717a75]">© 2024 Decor and Culture. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="text-xs font-bold uppercase tracking-widest text-[#717a75] hover:text-primary transition-colors" href="#">Terms</a>
              <a className="text-xs font-bold uppercase tracking-widest text-[#717a75] hover:text-primary transition-colors" href="#">Privacy</a>
              <a className="text-xs font-bold uppercase tracking-widest text-[#717a75] hover:text-primary transition-colors" href="#">Accessibility</a>
            </div>
          </div>
        </footer>
        
        <ToastProvider />
      </div>
    </>
  );
}