import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

type TabKey = 'index' | 'monthly' | 'points' | 'profile'

interface TabItem {
  key: TabKey
  label: string
  icon: string
  path: string
}

const tabs: TabItem[] = [
  { key: 'index', label: '首页', icon: '🏠', path: '/pages/index/index' },
  { key: 'monthly', label: '月度看板', icon: '📅', path: '/pages/monthly/index' },
  { key: 'points', label: '积分中心', icon: '⭐', path: '/pages/points/index' },
  { key: 'profile', label: '个人中心', icon: '👤', path: '/pages/profile/index' },
]

interface BottomNavBarProps {
  activeKey: TabKey
}

export default function BottomNavBar({ activeKey }: BottomNavBarProps) {
  const handleSwitch = (tab: TabItem) => {
    if (tab.key === activeKey) return
    Taro.switchTab({ url: tab.path })
  }

  return (
    <View className="bottom-nav">
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey
        return (
          <View
            key={tab.key}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-2xl transition-all ${
              isActive
                ? 'text-[#4CAF50]'
                : 'text-[#6f7a6b]'
            }`}
            onClick={() => handleSwitch(tab)}
          >
            <View
              className={`text-[24px] leading-none ${isActive ? 'scale-110' : ''}`}
            >
              {tab.icon}
            </View>
            <Text className={`text-[10px] tracking-tight ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {tab.label}
            </Text>
          </View>
        )
      })}
    </View>
  )
}
