'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { fetchLeaderboard } from '@/lib/api';

const LiveLeaderboard: React.FC = () => {
  const router = useRouter();
  const [isWeekly, setIsWeekly] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const period = isWeekly ? 'weekly' : 'overall';
  const { data: leaderboardData, error, isLoading } = useSWR(
    `/api/referral/leaderboard?period=${period}&limit=20`,
    () => fetchLeaderboard(period, 20),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 30000, // Cache for 30 seconds
    }
  );

  const displayedData = showAll ? (leaderboardData || []) : ((leaderboardData || []).slice(0, 6));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center max-h-screen p-4 bg-white">
        <div className="text-center">
          <div className="text-xl font-semibold text-gray-800">Loading Leaderboard...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center max-h-screen  p-4 bg-white">
        <div className="text-center">
          <div className="text-xl font-semibold text-red-600">Error: {error}</div>
          <button
            onClick={() => fetchLeaderboard(isWeekly ? 'weekly' : 'overall')}
            className="mt-4 bg-[#64961A] text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center max-h-screen  p-4 bg-white">
      <div className="w-full max-w-6xl mt-6">
        <h2 className="mb-2 text-3xl font-extrabold text-center text-gray-800">Live Leaderboard</h2>
        <p className="text-[20px] leading-[140%] tracking-[-0.02em] text-center mb-6 text-[#000000]">See who&apos;s climbing to the top each day!</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`font-bold ${isWeekly ? 'text-black' : 'text-black'}`}>Weekly Winners</span>
          <button
            className={`relative w-12 h-6 flex items-center bg-[#64961A] rounded-full p-1 transition-colors duration-300 focus:outline-none ${isWeekly ? 'bg-[#64961A]' : 'bg-gray-300 cursor-pointer' }`}
            onClick={() => setIsWeekly(!isWeekly)}
            aria-label="Toggle leaderboard type"
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isWeekly ? '' : 'translate-x-6'}`}
            />
          </button>
          <span className={`font-bold ${!isWeekly ? 'text-black' : 'text-black'}`}>Overall Winners</span>
        </div>
        <div className="space-y-4">
          {displayedData.map(({ id, name, location, referrals, imageUrl }, index) => (
            <div
              key={id}
              className="flex items-center justify-between bg-[#64961A] px-4 py-1 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="relative flex items-center justify-center w-8 h-8">
                  {index === 0 ? (
                    <Image src="/crown_1.svg" fill alt="Crown" className="w-8 h-8" />
                  ) : (
                    <Image src="/crown_2.svg" fill alt="Crown" className="w-8 h-8" />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">
                    {index + 1}
                  </span>
                </span>
                <Image src={imageUrl} width={12} height={12} alt={`${name}'s profile`} className="object-cover w-12 h-12 rounded-full" />
                <div>
                  <div className="text-xs font-semibold text-white lg:text-sm">{name}</div>
                  <div className="text-xs text-green-100 lg:text-sm">{location}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2">
                <Image src="/cup.svg" width={10} height={10} alt="Trophy" className="w-10 h-10" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-white">{referrals}</span>
                  <span className="mt-2 text-xs text-green-100">Referrals</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6 mb-6">
            {!showAll && displayedData.length === 6 && (
              <button
                className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded transition-colors cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                See All
              </button>
            )}
          </div>
          <div className="flex justify-center mt-6 mb-6">
            {showAll && (
              <button
                className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded transition-colors cursor-pointer"
                onClick={() => router.push("https://app.yummealsapp.com")}
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLeaderboard;