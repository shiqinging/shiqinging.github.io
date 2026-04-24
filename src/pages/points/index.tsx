import { View, Text } from '@tarojs/components'
import BottomNavBar from '../../components/BottomNavBar'
import './index.css'

interface GainItem {
  name: string
  time: string
  points: number
  icon: string
  color: string
  bg: string
}

const gains: GainItem[] = [
  { name: '晨跑', time: '今日, 7:00 AM', points: 25, icon: '🏃', color: '#006e1c', bg: '#f0f6ea' },
  { name: '补水目标', time: '昨日', points: 10, icon: '💧', color: '#005313', bg: '#e0f7fa' },
  { name: '阅读 20 页', time: '10月24日', points: 15, icon: '📖', color: '#835500', bg: '#fff7ed' },
  { name: '冥想', time: '10月23日', points: 20, icon: '🧘', color: '#006e1c', bg: '#f0f6ea' },
]

const trendLabels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
const trendValues = [120, 180, 150, 220, 190, 260, 320]
const maxTrend = Math.max(...trendValues)

export default function PointsPage() {
  return (
    <View className="min-h-screen bg-[#f5fbef] pb-24">
      {/* Top Bar */}
      <View className="flex items-center justify-between px-6 py-5 max-w-xl mx-auto">
        <View className="flex items-center">
          <View className="w-12 h-12 rounded-full border-4 border-white shadow-card bg-[#e0f7fa] flex items-center justify-center">
            <Text className="text-xl">👤</Text>
          </View>
        </View>
        <Text className="font-bold text-2xl text-[#006e1c]">Zenith Discipline</Text>
        <View className="text-[#006e1c] bg-white shadow-card w-10 h-10 flex items-center justify-center rounded-[14px]">
          ⚙️
        </View>
      </View>

      <View className="max-w-xl mx-auto px-5 flex flex-col gap-6">
        {/* Premium Points Card */}
        <View className="bg-gradient-to-br from-[#f0f6ea] to-[#eaf0e4] p-6 relative overflow-hidden flex flex-col items-center text-center shadow-card rounded-card border border-[#becab9]">
          <Text className="font-bold text-sm text-[#171d16] mb-2 tracking-wide uppercase px-4 py-one rounded-full shadow-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            当前积分
          </Text>
          <View className="flex items-center justify-center gap-2 relative z-10">
            <Text className="text-[40px]">⭐</Text>
            <Text className="text-[56px] leading-none text-[#171d16] font-black tracking-tighter">1,240</Text>
          </View>
          <View className="mt-5 px-6 py-two rounded-full flex items-center gap-2 relative z-10 shadow-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <Text className="text-[#006e1c] text-[20px]">✨</Text>
            <Text className="text-sm text-[#171d16] font-bold">本月获得</Text>
            <Text className="text-base text-[#006e1c] font-black">+320</Text>
          </View>
        </View>

        {/* Trend Chart Card */}
        <View className="bg-white p-6 shadow-card border border-[#becab9] rounded-card flex flex-col gap-3">
          <View className="flex justify-between items-center mb-2">
            <Text className="text-lg font-bold text-[#171d16] flex items-center gap-2">
              📈 积分趋势
            </Text>
            <Text className="text-xs font-bold text-[#171d16] bg-[#f0f6ea] px-3 py-one rounded-full">
              最近 7 天
            </Text>
          </View>
          {/* CSS-based line chart */}
          <View className="w-full h-40 relative mt-2">
            {/* Grid lines */}
            <View className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none pb-6">
              <View className="border-t-2 border-dashed border-[#becab9] w-full" />
              <View className="border-t-2 border-dashed border-[#becab9] w-full" />
              <View className="border-t-2 border-dashed border-[#becab9] w-full" />
            </View>
            {/* Chart bars */}
            <View className="absolute inset-0 pb-6 flex items-end justify-between gap-1 z-10">
              {trendValues.map((val, i) => {
                const height = (val / maxTrend) * 100
                return (
                  <View key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                    <View
                      className="w-full rounded-t-md bg-gradient-to-t from-[#4CAF50] to-[#78dc77] min-h-[4px] transition-all"
                      style={{ height: `${height}%` }}
                    />
                    <View className="w-3 h-3 rounded-full bg-white border-2 border-[#4CAF50] -mt-6" />
                  </View>
                )
              })}
            </View>
            {/* Connecting line (CSS overlay) */}
            <View className="absolute inset-0 pb-6 flex items-end justify-between gap-1 z-5 pointer-events-none">
              {trendValues.map((val, i) => {
                const height = (val / maxTrend) * 100
                return (
                  <View key={i} className="flex-1 flex items-end justify-center" style={{ height: '100%' }}>
                    <View className="w-px" style={{ height: `${height}%`, backgroundColor: 'rgba(76, 175, 80, 0.6)' }} />
                  </View>
                )
              })}
            </View>
            {/* X-axis labels */}
            <View className="absolute bottom-0 w-full flex justify-between text-[10px] font-bold" style={{ color: 'rgba(111, 122, 107, 0.6)' }}>
              {trendLabels.map((label) => (
                <Text key={label}>{label}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* History List */}
        <View className="flex flex-col gap-4">
          <Text className="text-lg font-bold text-[#171d16] px-2 flex items-center gap-2">
            <Text className="text-[#4CAF50] text-[28px]">🧾</Text> 积分记录
          </Text>
          {gains.map((gain, idx) => (
            <View
              key={idx}
              className="bg-white p-4 shadow-card rounded-card flex items-center justify-between border"
              style={{ borderColor: gain.bg }}
            >
              <View className="flex items-center gap-4">
                <View
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px]"
                  style={{ backgroundColor: gain.bg }}
                >
                  {gain.icon}
                </View>
                <View className="flex flex-col gap-zero">
                  <Text className="text-base font-bold text-[#171d16]">{gain.name}</Text>
                  <Text className="text-xs font-semibold" style={{ color: 'rgba(111, 122, 107, 0.7)' }}>{gain.time}</Text>
                </View>
              </View>
              <View
                className="text-lg font-black rounded-full px-4 py-2"
                style={{ color: gain.color, backgroundColor: gain.bg }}
              >
                +{gain.points}
              </View>
            </View>
          ))}
        </View>
      </View>

      <BottomNavBar activeKey="points" />
    </View>
  )
}
