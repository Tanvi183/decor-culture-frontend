'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const [user] = useState({
    name: 'Sana Ullah',
    email: 'sana@example.com',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
  });

  // Sample data for charts
  const pieData = [
    { name: 'Profile Complete', value: 85, color: '#3d5c4d' },
    { name: 'Payment Methods', value: 10, color: '#0ea5e9' },
    { name: 'Settings', value: 5, color: '#f59e0b' }
  ];

  const barData = [
    { month: 'Jan', activity: 40 },
    { month: 'Feb', activity: 65 },
    { month: 'Mar', activity: 50 },
    { month: 'Apr', activity: 85 },
    { month: 'May', activity: 75 },
    { month: 'Jun', activity: 100 }
  ];

  return (
    <>
      {/* PageHeading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="size-16 rounded-full border-2 border-primary/20 overflow-hidden">
            <Image
              src={user.profileImage}
              alt={user.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#141514] dark:text-white">
              Welcome back, {user.name.split(' ')[0]}
            </h1>
            <p className="text-lg text-[#717a75] font-light">
              Your modern sanctuary is waiting for its next piece.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f2f3f2] dark:bg-[#2a2a2a] text-[#141514] dark:text-white font-bold text-sm hover:shadow-md transition-all">
          <span className="material-symbols-outlined text-base">edit</span>
          Edit Profile
        </button>
      </div>

      {/* Section Overview */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[#f2f3f2] dark:border-[#333] pb-4">
          <h2 className="text-xl font-bold tracking-tight">Account Overview</h2>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-[#222] border border-[#f2f3f2] dark:border-[#333] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Account Status</h3>
              <span className="text-xs font-bold text-[#717a75] uppercase tracking-widest">Overview</span>
            </div>
            
            {/* CSS Pie Chart */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(
                      #3d5c4d 0deg ${pieData[0].value * 3.6}deg,
                      #0ea5e9 ${pieData[0].value * 3.6}deg ${(pieData[0].value + pieData[1].value) * 3.6}deg,
                      #f59e0b ${(pieData[0].value + pieData[1].value) * 3.6}deg 360deg
                    )`
                  }}
                >
                  <div className="absolute inset-6 bg-white dark:bg-[#222] rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#141514] dark:text-white">85%</div>
                      <div className="text-xs text-[#717a75]">Complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-[#717a75]">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-[#222] border border-[#f2f3f2] dark:border-[#333] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Activity Overview</h3>
              <span className="text-xs font-bold text-[#717a75] uppercase tracking-widest">Last 6 Months</span>
            </div>
            
            {/* CSS Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 mb-4">
              {barData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-full bg-[#f2f3f2] dark:bg-[#2a2a2a] rounded-t-lg overflow-hidden" style={{ height: '200px' }}>
                    <div 
                      className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ height: `${item.activity}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#717a75] font-medium">{item.month}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs text-[#717a75]">
              <span>0</span>
              <span>Activity Level</span>
              <span>100</span>
            </div>
          </div>
        </div>

        {/* Account Information Card */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-[#222] border border-[#f2f3f2] dark:border-[#333] rounded-2xl p-6 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-[#f2f3f2] dark:bg-[#2a2a2a] rounded-xl text-primary">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <Link href="/dashboard/payments" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">
                Manage
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Account Information</h3>
              <p className="text-sm text-[#717a75]">Manage your profile and payment methods.</p>
            </div>
            <div className="bg-[#fcfcfc] dark:bg-[#2a2a2a] p-4 rounded-xl border border-[#f2f3f2] dark:border-[#333] mt-2">
              <p className="text-sm font-bold">{user.name}</p>
              <p className="text-sm text-[#717a75] mt-1">{user.email}</p>
              <p className="text-sm text-[#717a75]">Member since 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}