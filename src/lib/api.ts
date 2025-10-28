const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://app.yummealsapp.com";

export interface LeaderboardEntry {
  id: number;
  name: string;
  location?: string;
  referrals: number;
  imageUrl: string;
}

export interface LeaderboardResponse {
  leaderboard: Array<{
    rank: number;
    id: number;
    name: string;
    referral_code: string;
    total_referrals: number;
    referral_balance: string;
  }>;
  updated_at: string;
}

export const fetchLeaderboard = async (period: string, limit: number = 20): Promise<LeaderboardEntry[]> => {
  const response = await fetch(`${API_URL}/api/referral/leaderboard?period=${period}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboard data');
  }
  const apiResponse: LeaderboardResponse = await response.json();
  const leaderboardArray = apiResponse.leaderboard || [];
  return leaderboardArray.map((item) => ({
    id: item.id,
    name: item.name,
    referrals: item.total_referrals,
    imageUrl: '/man.svg',
  }));
};
