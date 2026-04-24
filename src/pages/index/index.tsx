import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import BottomNavBar from '../../components/BottomNavBar'
import './index.css'

interface TaskItem {
  id: number
  name: string
  desc: string
  points: number
  icon: string
  color: string
  bgColor: string
  borderColor: string
  done: boolean
}

interface SuggestedTask {
  id: number
  name: string
  desc: string
  icon: string
  color: string
}

export default function IndexPage() {
  const [showAiModal, setShowAiModal] = useState(false)

  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 1,
      name: '早起',
      desc: '06:00 · 日常',
      points: 20,
      icon: '☀️',
      color: '#006e1c',
      bgColor: '#f0f6ea',
      borderColor: '#eaf0e4',
      done: false,
    },
    {
      id: 2,
      name: '阅读 30 分钟',
      desc: '专注 · 自我成长',
      points: 40,
      icon: '📖',
      color: '#835500',
      bgColor: '#fff7ed',
      borderColor: '#ffedd5',
      done: false,
    },
    {
      id: 3,
      name: '健身',
      desc: '1 小时 · 身体健康',
      points: 60,
      icon: '🏋️',
      color: '#006e1c',
      bgColor: '#f0f6ea',
      borderColor: '#eaf0e4',
      done: false,
    },
  ])

  const suggestedTasks: SuggestedTask[] = [
    { id: 1, name: '15分钟瑜伽', desc: '放松身心 · 健康', icon: '🧘', color: '#006e1c' },
    { id: 2, name: '数码排毒', desc: '2小时 · 专注力', icon: '📵', color: '#835500' },
    { id: 3, name: '感恩日记', desc: '记录3件小事 · 心理', icon: '📝', color: '#006e1c' },
  ]

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const completeAll = () => {
    setTasks((prev) => prev.map((t) => ({ ...t, done: true })))
  }

  const doneCount = tasks.filter((t) => t.done).length
  const remaining = tasks.length - doneCount

  return (
    <View className="min-h-screen bg-[#f5fbef] pb-nav pt-[68px] relative">
      {/* Top Bar */}
      <View className="top-bar">
        <View className="top-bar__avatar" />
        <Text className="top-bar__title">Zenith Discipline</Text>
        <View className="top-bar__settings">⚙️</View>
      </View>

      <View className="px-5 max-w-[540px] mx-auto">
        {/* Dashboard Header */}
        <View className="flex items-center justify-between mt-4 mb-5">
          <View>
            <Text className="text-[12px] font-semibold text-[#6f7a6b] tracking-widest uppercase">今日</Text>
            <Text className="block text-[24px] font-medium text-[#171d16] -tracking-wide">2026.04.24</Text>
          </View>
          <View className="flex gap-3">
            <View className="flex items-center gap-one bg-white px-3 py-2 rounded-xl border border-[#becab9] shadow-card">
              <Text className="text-[16px]">⭐</Text>
              <Text className="text-[12px] font-semibold text-[#171d16]">340</Text>
            </View>
            <View className="flex items-center gap-one bg-white px-3 py-2 rounded-xl border border-[#becab9] shadow-card">
              <Text className="text-[16px]">🔥</Text>
              <Text className="text-[12px] font-semibold text-[#171d16]">5 天</Text>
            </View>
          </View>
        </View>

        {/* Motivation Banner */}
        <View className="flex items-start gap-3 p-4 mb-5 bg-[#f0f6ea] border border-[#becab9] rounded-card shadow-card">
          <Text className="text-[20px] flex-shrink-0">💡</Text>
          <Text className="text-[14px] font-medium text-[#005313] leading-relaxed">
            再完成 {remaining > 0 ? remaining : 0} 个任务即可达成今日目标！
          </Text>
        </View>

        {/* Daily Cards Grid */}
        <View className="grid grid-cols-2 gap-4 mb-5">
          <View className="p-4 rounded-card border border-[#becab9] bg-[#ffffff] shadow-card relative overflow-hidden">
            <Text className="text-[18px] mb-one block">💡</Text>
            <Text className="text-[14px] font-semibold text-[#3f4a3c] block mb-2">每日灵感</Text>
            <Text className="text-[13px] text-[#6f7a6b] leading-relaxed block">
              "种一棵树最好的时间是十年前，其次是现在。"
            </Text>
          </View>
          <View className="p-4 rounded-card border border-[#becab9] bg-[#ffffff] shadow-card relative overflow-hidden">
            <View className="flex items-center justify-between mb-3">
              <View className="flex items-center gap-2">
                <Text className="text-[18px]">🏆</Text>
                <Text className="text-[14px] font-semibold text-[#3f4a3c]">成就墙</Text>
              </View>
              <Text className="text-[20px] text-[#6f7a6b]">›</Text>
            </View>
            <View className="flex items-baseline gap-1 mb-2">
              <Text className="text-[28px] font-bold text-[#006e1c] leading-none">12</Text>
              <Text className="text-[11px] text-[#6f7a6b] pb-half">枚勋章</Text>
            </View>
            <Text className="text-[11px] text-[#6f7a6b] block">离下一枚成就更近了</Text>
          </View>
        </View>

        {/* Task Section */}
        <View className="mb-6">
          <View className="flex items-center justify-between mb-4">
            <Text className="text-[18px] font-semibold text-[#171d16]">今日任务</Text>
            <View className="flex items-center gap-one bg-[#f0f6ea] text-[#006e1c] px-3 py-one rounded-full text-[12px] font-medium border border-[#becab9] shadow-card" onClick={() => setShowAiModal(true)}>
              <Text className="text-[14px]">✨</Text>
              <Text>AI 任务推荐</Text>
            </View>
          </View>

          <View className="flex flex-col gap-4">
            {tasks.map((task) => (
              <View
                key={task.id}
                className={`flex items-center justify-between p-4 bg-white rounded-card border shadow-card transition-opacity ${task.done ? 'opacity-60' : ''}`}
                style={{ borderColor: task.borderColor }}
                onClick={() => toggleTask(task.id)}
              >
                <View className="flex items-center gap-4 flex-1">
                  <View
                    className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${task.bgColor}, ${task.borderColor})`,
                      borderColor: task.borderColor,
                    }}
                  >
                    <Text className="text-[24px]">{task.icon}</Text>
                  </View>
                  <View className="flex flex-col gap-zero">
                    <View className="flex items-center gap-2">
                      <View
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: task.color }}
                      />
                      <Text className={`text-[16px] font-medium ${task.done ? 'line-through text-[#6f7a6b]' : 'text-[#171d16]'}`}>
                        {task.name}
                      </Text>
                    </View>
                    <Text className="text-[13px] text-[#6f7a6b]">{task.desc}</Text>
                  </View>
                </View>
                <View className="flex items-center gap-3 flex-shrink-0">
                  <Text className="text-[#FEB64C] font-bold text-sm">+{task.points}</Text>
                  <View
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${task.done ? '' : 'border-2 border-[#becab9]'}`}
                    style={
                      task.done
                        ? {
                            background: '#4CAF50',
                            borderColor: '#4CAF50',
                          }
                        : {}
                    }
                  >
                    {task.done && (
                      <Text className="text-white text-[18px] font-semibold">✓</Text>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Complete All Button */}
        {doneCount < tasks.length && (
          <View className="flex items-center justify-center gap-2 w-full py-4 bg-[#4CAF50] text-white rounded-card shadow-card mb-4" onClick={completeAll}>
            <Text className="text-[20px]">✅</Text>
            <Text className="text-[14px] font-semibold tracking-wider">一键打卡</Text>
          </View>
        )}
      </View>

      {/* FAB */}
      <View className="fixed right-5 bottom-above-nav w-14 h-14 rounded-xl bg-[#FEB64C] flex items-center justify-center z-30 shadow-card" onClick={() => setShowAiModal(true)}>
        <Text className="text-[28px] text-white font-light">+</Text>
      </View>

      {/* AI Modal */}
      {showAiModal && (
        <View className="fixed inset-0 z-50 flex items-center justify-center px-5" onClick={() => setShowAiModal(false)}>
          <View className="relative w-full max-w-sm bg-[#f5fbef] rounded-[16px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <View className="bg-[#f0f6ea] p-6 pb-4 border-b border-[#becab9]">
              <View className="flex justify-between items-start">
                <View className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-card">
                  ✨
                </View>
                <View className="w-8 h-8 rounded-full flex items-center justify-center text-[#6f7a6b]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} onClick={() => setShowAiModal(false)}>
                  ✕
                </View>
              </View>
              <Text className="text-[20px] font-semibold text-[#171d16] mt-3 block">AI 任务推荐</Text>
              <Text className="text-[13px] text-[#6f7a6b] mt-1 block">基于您的近期活动和偏好生成的个性化建议</Text>
            </View>
            <View className="p-5 flex flex-col gap-3 flex-1">
              {suggestedTasks.map((task) => (
                <View key={task.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#becab9] shadow-card">
                  <View className="flex items-center gap-3">
                    <View className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] bg-[#f0f6ea]">
                      {task.icon}
                    </View>
                    <View className="flex flex-col">
                      <Text className="text-[15px] font-medium text-[#171d16]">{task.name}</Text>
                      <Text className="text-[12px] text-[#6f7a6b]">{task.desc}</Text>
                    </View>
                  </View>
                  <View className="w-8 h-8 rounded-xl bg-[#4CAF50] text-white flex items-center justify-center shadow-card text-[18px]">
                    +
                  </View>
                </View>
              ))}
            </View>
            <View className="p-5 pt-2">
              <View className="w-full bg-[#eaf0e4] text-[#3f4a3c] rounded-xl py-3 flex items-center justify-center" onClick={() => setShowAiModal(false)}>
                <Text className="text-[14px] font-medium">完成</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      <BottomNavBar activeKey="index" />
    </View>
  )
}
