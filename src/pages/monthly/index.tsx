import { View, Text } from '@tarojs/components'
import BottomNavBar from '../../components/BottomNavBar'
import './index.css'

const weekDays = ['一', '二', '三', '四', '五', '六', '日']

// April 2026: starts on Wednesday (offset 2 empty cells)
const heatmapData: (number | null)[] = [
  null, null, 3, 5, 2, null, 4,
  3, 4, 5, 3, 4, null, 5,
  3, 3, 4, 3, 4, 5, 4,
  null, 5, 3, 3, 4, 4, null,
  3, 4, 5, 3, null, null, null,
]

const taskBoard = [
  { name: '每日饮水 2L', icon: '💧', color: '#006e1c', bg: '#e0f7fa', done: 28, total: 30 },
  { name: '阅读 20 页', icon: '📚', color: '#835500', bg: '#fff7ed', done: 25, total: 30 },
  { name: '晨间锻炼', icon: '🏃', color: '#006e1c', bg: '#f0f6ea', done: 20, total: 30 },
]

export default function MonthlyPage() {
  return (
    <View className="min-h-screen bg-[#f5fbef] pb-nav pt-[68px]">
      {/* Top Bar */}
      <View className="top-bar-bar">
        <View className="top-bar-bar__avatar" />
        <Text className="top-bar-bar__title">
          <Text className="text-[#FEB64C] text-2xl">🌸</Text>
          Zenith
        </Text>
        <View className="top-bar-bar__settings">⚙️</View>
      </View>

      <View className="max-w-[540px] mx-auto px-5 pt-4 flex flex-col gap-6">
        {/* Month Switcher */}
        <View className="flex items-center justify-between bg-white rounded-card p-4 border border-[#becab9] shadow-card">
          <View className="p-2 text-[#006e1c] bg-[#f0f6ea] rounded-xl">
            <Text className="text-xl">‹</Text>
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-xl font-bold text-[#171d16]">
              <Text className="text-[#FEB64C]">📅</Text> 2026年4月
            </Text>
          </View>
          <View className="p-2 text-[#006e1c] bg-[#f0f6ea] rounded-xl">
            <Text className="text-xl">›</Text>
          </View>
        </View>

        {/* Heat Map */}
        <View className="bg-white rounded-card p-lg shadow-card border border-[#becab9] relative overflow-hidden">
          <View className="absolute top-0 right-0 w-32 h-32 rounded-bl-[4rem] -z-0" style={{ backgroundColor: 'rgba(224, 247, 250, 0.3)' }} />
          <View className="flex justify-between items-center z-10 mb-2">
            <Text className="text-xl font-bold text-[#171d16]">小红花记录 ✨</Text>
            <Text className="text-[12px] font-semibold text-[#006e1c] bg-[#f0f6ea] px-3 py-1 rounded-full border border-[#becab9]">4月</Text>
          </View>
          <View className="grid grid-cols-7 gap-half w-full z-10">
            {/* Day labels */}
            {weekDays.map((day, i) => (
              <View key={day} className={`text-center text-[10px] font-semibold pb-1 ${i >= 5 ? 'text-[#FEB64C]' : 'text-[#6f7a6b]'}`}>
                {day}
              </View>
            ))}
            {/* Heatmap cells */}
            {heatmapData.map((val, idx) => {
              let cellStyle = { backgroundColor: '#eaf0e4', border: '1px solid #becab9' }
              if (val !== null) {
                if (val >= 4) {
                  cellStyle = { backgroundColor: 'rgba(76, 175, 80, 0.8)', boxShadow: '0px 4px 12px rgba(76, 175, 80, 0.4)' }
                } else if (val >= 3) {
                  cellStyle = { backgroundColor: 'rgba(254, 182, 76, 0.9)', boxShadow: '0px 4px 12px rgba(254, 182, 76, 0.4)' }
                } else {
                  cellStyle = { backgroundColor: 'rgba(76, 175, 80, 0.6)' }
                }
              }
              return <View key={idx} className="heatmap-cell" style={cellStyle} />
            })}
          </View>
          <View className="flex items-center justify-end gap-2 mt-2 p-2 rounded-card self-end" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Text className="text-xs text-[#6f7a6b]">少</Text>
            <View className="w-4 h-4 rounded bg-[#eaf0e4] border border-[#becab9]" />
            <View className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(254, 182, 76, 0.9)' }} />
            <View className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(76, 175, 80, 0.8)' }} />
            <Text className="text-xs text-[#6f7a6b]">多</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View className="grid grid-cols-2 gap-4">
          <View className="bg-[#f0f6ea] p-5 flex flex-col gap-2 rounded-card shadow-card relative overflow-hidden">
            <View className="absolute -right-4 -bottom-4 text-6xl" style={{ color: 'rgba(76, 175, 80, 0.2)' }}>💗</View>
            <View className="flex items-center gap-2 text-[#006e1c] z-10">
              <Text className="text-xl bg-white p-1 rounded-full shadow-card">✅</Text>
              <Text className="font-bold text-[#171d16]">完成率</Text>
            </View>
            <Text className="text-4xl font-bold text-[#171d16] z-10">
              85<Text className="text-xl text-[#6f7a6b]">%</Text>
            </Text>
          </View>
          <View className="bg-[#e0f7fa] p-5 flex flex-col gap-2 rounded-card shadow-card relative overflow-hidden">
            <View className="absolute -right-2 -bottom-2 text-6xl" style={{ color: 'rgba(0, 110, 28, 0.2)' }}>⭐</View>
            <View className="flex items-center gap-2 text-[#006e1c] z-10">
              <Text className="text-xl bg-white p-1 rounded-full shadow-card">⭐</Text>
              <Text className="font-bold text-[#171d16]">天</Text>
            </View>
            <Text className="text-4xl font-bold text-[#171d16] z-10">1,240</Text>
          </View>
          <View className="bg-[#fff7ed] p-5 flex flex-col gap-2 rounded-card shadow-card relative overflow-hidden">
            <View className="absolute -right-2 -top-2 text-6xl" style={{ color: 'rgba(254, 182, 76, 0.3)' }}>🔥</View>
            <View className="flex items-center gap-2 text-[#835500] z-10">
              <Text className="text-xl bg-white p-1 rounded-full shadow-card">🔥</Text>
              <Text className="font-bold text-[#171d16]">最长连续</Text>
            </View>
            <Text className="text-4xl font-bold text-[#171d16] z-10">
              15 <Text className="text-lg text-[#6f7a6b] font-medium">天</Text>
            </Text>
          </View>
          <View className="bg-[#f0f6ea] p-5 flex flex-col gap-2 rounded-card shadow-card relative overflow-hidden">
            <View className="absolute -left-2 -bottom-4 text-6xl" style={{ color: 'rgba(0, 110, 28, 0.2)' }}>🚀</View>
            <View className="flex items-center gap-2 text-[#006e1c] z-10">
              <Text className="text-xl bg-white p-1 rounded-full shadow-card">📋</Text>
              <Text className="font-bold text-[#171d16]">活跃任务</Text>
            </View>
            <Text className="text-4xl font-bold text-[#171d16] z-10">6</Text>
          </View>
        </View>

        {/* Task Board */}
        <View className="bg-white rounded-card p-lg shadow-card border border-[#becab9] relative overflow-hidden">
          <View className="absolute top-0 right-0 w-full h-12" style={{ background: 'linear-gradient(to bottom, rgba(240, 246, 234, 0.3), transparent)' }} />
          <Text className="text-xl font-bold text-[#171d16] pb-2 block z-10 flex items-center gap-2">
            <Text>📋</Text> 2026年4月 任务板
          </Text>
          <View className="flex flex-col gap-3 z-10">
            {taskBoard.map((task) => (
              <View
                key={task.name}
                className="flex items-center justify-between bg-opacity-40 p-3 rounded-card border hover:opacity-80"
                style={{
                  backgroundColor: task.bg,
                  borderColor: task.color + '40',
                }}
              >
                <View className="flex items-center gap-3">
                  <View
                    className="w-10 h-10 rounded-xl bg-white shadow-card flex items-center justify-center border border-[#becab9]"
                    style={{ borderColor: task.color + '30' }}
                  >
                    <Text className="text-xl">{task.icon}</Text>
                  </View>
                  <Text className="text-lg font-medium text-[#171d16]">{task.name}</Text>
                </View>
                <Text
                  className="text-[12px] font-semibold bg-white px-3 py-1 rounded-full shadow-card border border-[#becab9]"
                  style={{ color: task.color }}
                >
                  {task.done}/{task.total}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <BottomNavBar activeKey="monthly" />
    </View>
  )
}
