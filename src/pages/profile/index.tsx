import { View, Text } from '@tarojs/components'
import BottomNavBar from '../../components/BottomNavBar'
import './index.css'

interface Achievement {
  icon: string
  title: string
  unlocked: boolean
  color: string
  bg: string
}

interface Activity {
  name: string
  time: string
  points: number
  icon: string
  color: string
  bg: string
}

const achievements: Achievement[] = [
  { icon: '🏅', title: '早起先锋', unlocked: true, color: '#fff', bg: '#FEB64C' },
  { icon: '💧', title: '补水达人', unlocked: true, color: '#005313', bg: '#e0f7fa' },
  { icon: '🏃', title: '万步达人', unlocked: false, color: '#6f7a6b', bg: '#eaf0e4' },
  { icon: '🧘', title: '静心', unlocked: false, color: '#6f7a6b', bg: '#eaf0e4' },
]

const activities: Activity[] = [
  { name: '晨间冥想 (10分钟)', time: '今日, 7:30 AM', points: 15, icon: '✅', color: '#006e1c', bg: '#f0f6ea' },
  { name: '饮水 500ml', time: '今日, 8:15 AM', points: 5, icon: '💧', color: '#005313', bg: '#e0f7fa' },
  { name: '阅读 10 页', time: '昨日, 9:45 PM', points: 20, icon: '📖', color: '#835500', bg: '#fff7ed' },
]

export default function ProfilePage() {
  return (
    <View className="min-h-screen bg-[#f5fbef] pb-24">
      {/* Top Bar */}
      <View className="flex items-center justify-between px-5 py-4 max-w-xl mx-auto">
        <View className="flex items-center gap-3">
          <View className="w-12 h-12 rounded-full bg-[#e0f7fa] overflow-hidden border-2 border-white flex items-center justify-center shadow-card">
            <Text className="text-xl">👤</Text>
          </View>
          <Text className="text-[#006e1c] font-extrabold text-xl tracking-tight">Zenith Discipline</Text>
        </View>
        <View className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center">
          <Text className="text-[#006e1c]">⚙️</Text>
        </View>
      </View>

      <View className="max-w-xl mx-auto px-5 space-y-4">
        {/* Profile Header Card */}
        <View className="bg-white rounded-card p-lg shadow-card flex flex-col items-center text-center relative overflow-hidden">
          <View className="absolute -top-10 -left-10 w-48 h-48 bg-[#f0f6ea] rounded-full blur-xl" />
          <View className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-xl" style={{ backgroundColor: 'rgba(255, 247, 237, 0.5)' }} />
          <View className="relative z-10 w-28 h-28 rounded-full border-4 border-white shadow-md mb-4 overflow-hidden bg-[#f0f6ea]">
            <View className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f0f6ea] to-[#eaf0e4]">
              <Text className="text-5xl">👩</Text>
            </View>
          </View>
          <Text className="text-[28px] text-[#171d16] mb-1 z-10 font-semibold">Elena Rostova</Text>
          <View className="flex items-center gap-2 bg-[#f0f6ea] px-5 py-2 rounded-full z-10 mt-2">
            <Text className="text-[20px]">🏆</Text>
            <Text className="text-[12px] font-semibold text-[#005313] tracking-wide uppercase">12 级 自律大师</Text>
          </View>
          <Text className="text-[14px] text-[#6f7a6b] mt-4 max-w-[280px] z-10">
            自 2023 年 10 月起开启自律之旅。坚持，是无声的力量。
          </Text>
        </View>

        {/* Stats Grid */}
        <View className="grid grid-cols-2 gap-4">
          {/* Total Points - full width */}
          <View className="col-span-2 bg-white rounded-card p-lg shadow-card flex items-center justify-between relative overflow-hidden">
            <View className="absolute -right-4 top-half-translate w-24 h-24 bg-[#f0f6ea] rounded-full blur-xl" />
            <View className="flex flex-col z-10">
              <Text className="text-[12px] font-semibold text-[#6f7a6b] tracking-wide uppercase mb-1">总积分</Text>
              <Text className="text-[32px] font-semibold text-[#006e1c] leading-tight">12,450</Text>
            </View>
            <View className="w-16 h-16 rounded-xl bg-[#f0f6ea] flex items-center justify-center shadow-card z-10">
              <Text className="text-[32px]">⭐</Text>
            </View>
          </View>
          {/* Streak */}
          <View className="bg-white rounded-card p-4 shadow-card flex flex-col items-start relative overflow-hidden">
            <View className="w-14 h-14 rounded-xl bg-[#fff7ed] flex items-center justify-center mb-3">
              <Text className="text-[24px]">🔥</Text>
            </View>
            <Text className="text-[28px] text-[#171d16] leading-none mb-2 font-semibold">42</Text>
            <Text className="text-[12px] font-semibold text-[#6f7a6b] tracking-wide uppercase">连续天数</Text>
          </View>
          {/* Completed */}
          <View className="bg-white rounded-card p-4 shadow-card flex flex-col items-start relative overflow-hidden">
            <View className="w-14 h-14 rounded-xl bg-[#e0f7fa] flex items-center justify-center mb-3">
              <Text className="text-[24px]">✅</Text>
            </View>
            <Text className="text-[28px] text-[#171d16] leading-none mb-2 font-semibold">840</Text>
            <Text className="text-[12px] font-semibold text-[#6f7a6b] tracking-wide uppercase">累计完成任务</Text>
          </View>
        </View>

        {/* Achievements */}
        <View className="bg-white rounded-card p-lg shadow-card overflow-hidden">
          <View className="flex justify-between items-center mb-4">
            <Text className="text-[20px] text-[#171d16] font-semibold">最近成就</Text>
            <Text className="text-[12px] font-semibold text-[#006e1c] bg-[#f0f6ea] px-4 py-2 rounded-full">
              查看全部
            </Text>
          </View>
          <View className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2" style={{ scrollbarWidth: 'none' }}>
            {achievements.map((a, idx) => (
              <View
                key={idx}
                className={`flex flex-col items-center w-24 flex-shrink-0 ${a.unlocked ? '' : 'opacity-60'}`}
              >
                <View
                  className="w-20 h-20 rounded-[12px] flex items-center justify-center shadow-card mb-3 border-4 border-white"
                  style={{ backgroundColor: a.bg }}
                >
                  <Text className="text-[32px]" style={a.unlocked ? {} : { filter: 'grayscale(100%)' }}>
                    {a.icon}
                  </Text>
                </View>
                <Text className="text-[12px] text-[#171d16] text-center leading-tight font-semibold">
                  {a.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View className="bg-white rounded-card p-lg shadow-card mb-8 relative overflow-hidden">
          <View className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-xl" style={{ backgroundColor: 'rgba(255, 247, 237, 0.2)' }} />
          <Text className="text-[20px] text-[#171d16] font-semibold mb-4 block relative z-10">最近动态</Text>
          <View className="flex flex-col gap-2 relative z-10">
            {activities.map((act, idx) => (
              <View key={idx} className="flex items-center gap-4 p-3 bg-[#f0f6ea] rounded-card">
                <View
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: act.bg }}
                >
                  <Text className="text-[20px]">{act.icon}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-[16px] text-[#171d16] font-semibold block mb-half">{act.name}</Text>
                  <Text className="text-[12px] text-[#6f7a6b] block">{act.time}</Text>
                </View>
                <View className="bg-white px-3 py-1 rounded-full shadow-card">
                  <Text className="text-[12px] font-semibold text-[#006e1c] tracking-wide uppercase">
                    +{act.points}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <BottomNavBar activeKey="profile" />
    </View>
  )
}
