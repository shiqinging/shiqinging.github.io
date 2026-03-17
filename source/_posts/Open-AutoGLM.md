---
title: Open-AutoGLM
date: 2026-03-18
tags:
  - 随笔
categories:
---
# 克隆项目到本地
```shell
git clone https://github.com/zai-org/Open-AutoGLM.git
```
# 分析代码
# Open-AutoGLM 项目详细分析文档

  

## 一、项目概述

  

### 1.1 项目简介

  

**Open-AutoGLM** 是一个基于视觉语言模型的手机端智能助理框架，能够通过 AI 理解手机屏幕内容并自动执行操作来完成用户任务。

  

- **核心能力**：用自然语言描述需求（如"打开美团搜索附近的火锅店"），AI 自动完成整个操作流程

- **支持设备**：Android（ADB）、鸿蒙（HDC）、iOS（WebDriverAgent）

- **技术原理**：截图 → 视觉语言模型理解界面 → 输出操作指令 → 执行 → 循环

  

### 1.2 项目架构

  

```

Open-AutoGLM/

├── main.py # 主入口程序（CLI 命令行）

├── ios.py # iOS 专用入口

├── load_config.py # 配置文件加载模块

├── config.yaml # 主配置文件

├── requirements.txt # Python 依赖

├── setup.py # 包安装配置

│

├── phone_agent/ # 核心 Agent 框架

│ ├── agent.py # Android/鸿蒙 Agent 主类

│ ├── agent_ios.py # iOS Agent 主类

│ ├── device_factory.py # 设备工厂（ADB/HDC/iOS切换）

│ │

│ ├── adb/ # Android ADB 工具集

│ ├── hdc/ # 鸿蒙 HDC 工具集

│ ├── xctest/ # iOS XCTest 工具集

│ │

│ ├── actions/ # 动作执行处理

│ ├── assertion/ # 断言验证模块

│ ├── teams/ # Multi-Agent 协作框架

│ ├── config/ # 配置管理

│ └── model/ # AI 模型客户端

│

├── configs/ # 外部配置文件

├── docs/ # 文档

├── examples/ # 使用示例

├── resources/ # 资源文件

├── scripts/ # 工具脚本

└── test_cases/ # 测试用例

```

  

---

  

## 二、根目录文件详解

  

### 2.1 核心程序文件

  

| 文件 | 说明 |

|------|------|

| `main.py` | **主入口程序**：提供 CLI 命令行接口，支持交互模式和单次任务模式。处理设备检查、配置加载、Agent 初始化 |

| `ios.py` | **iOS 专用入口**：针对 iOS 设备的特殊启动脚本 |

| `load_config.py` | **配置加载器**：从 config.yaml 读取配置，支持环境变量和命令行参数覆盖 |

| `config.yaml` | **主配置文件**：模型 API 地址、Agent 参数、设备配置等 |

| `setup.py` | **安装脚本**：定义包的元数据、依赖、入口点 |

| `requirements.txt` | **依赖清单**：Pillow, openai, PyYAML, uiautomator2 等 |

  

### 2.2 配置优先级

  

```

命令行参数 > 环境变量 > config.yaml > 默认值

```

  

### 2.3 主要环境变量

  

| 变量名 | 说明 | 默认值 |

|--------|------|--------|

| `PHONE_AGENT_BASE_URL` | 模型 API 地址 | `http://localhost:8000/v1` |

| `PHONE_AGENT_MODEL` | 模型名称 | `autoglm-phone-9b` |

| `PHONE_AGENT_API_KEY` | API Key | `EMPTY` |

| `PHONE_AGENT_MAX_STEPS` | 最大步数 | `100` |

| `PHONE_AGENT_DEVICE_TYPE` | 设备类型 | `adb` |

| `PHONE_AGENT_LANG` | 语言 | `cn` |

  

---

  

## 三、phone_agent 核心模块详解

  

### 3.1 顶层模块

  

| 文件 | 功能说明 |

|------|----------|

| `__init__.py` | 包导出：暴露 `PhoneAgent` 和 `IOSPhoneAgent` 类 |

| `agent.py` | **Android/鸿蒙 Agent 核心**：实现任务执行循环、截图、模型调用、动作解析 |

| `agent_ios.py` | **iOS Agent 核心**：针对 iOS 的特殊实现 |

| `device_factory.py` | **设备工厂**：根据设备类型（ADB/HDC/iOS）动态选择实现 |

  

### 3.2 ADB 模块（Android）

  

```

phone_agent/adb/

├── __init__.py # 导出所有公共 API

├── connection.py # ADB 连接管理（USB/WiFi）

├── device.py # 设备控制（点击、滑动、启动应用）

├── input.py # 文本输入（ADB Keyboard）

└── screenshot.py # 屏幕截图

```

  

**核心功能**：

  

- `ADBConnection`：连接管理（connect/disconnect/tcpip）

- `tap/swipe/back/home/launch_app`：设备操作

- `type_text/clear_text`：文本输入

- `get_screenshot`：获取截图

- `detect_and_set_adb_keyboard`：自动检测和设置 ADB 键盘

  

### 3.3 HDC 模块（鸿蒙 HarmonyOS）

  

```

phone_agent/hdc/

├── __init__.py # 导出所有公共 API

├── connection.py # HDC 连接管理

├── device.py # 设备控制

├── input.py # 文本输入

└── screenshot.py # 屏幕截图

```

  

**功能与 ADB 模块相同，针对鸿蒙系统的原生实现**

  

### 3.4 XCTest 模块（iOS）

  

```

phone_agent/xctest/

├── __init__.py # 导出所有公共 API

├── connection.py # WebDriverAgent 连接

├── device.py # iOS 设备控制

├── input.py # 文本输入

└── screenshot.py # 屏幕截图

```

  

**通过 WebDriverAgent/XCUITest 实现 iOS 设备控制**

  

### 3.5 Actions 模块（动作处理）

  

```

phone_agent/actions/

├── __init__.py # 导出 do/finish/parse_action 函数

├── handler.py # Android/鸿蒙动作执行器

└── handler_ios.py # iOS 动作执行器

```

  

**支持的动作类型**：

  

- `Launch` - 启动应用

- `Tap` - 点击

- `Type` - 输入文本

- `Swipe` - 滑动

- `Back` - 返回

- `Home` - 回桌面

- `Long Press` - 长按

- `Double Tap` - 双击

- `Wait` - 等待

- `Take_over` - 人工接管

  

### 3.6 Assertion 模块（断言验证）

  

```

phone_agent/assertion/

├── __init__.py # 模块导出

├── assertion_agent.py # 断言专用 Agent

├── assertion_rules.py # 断言规则解析

├── assertion_watcher.py # 断言监控器

├── image_diff.py # 图像差异对比

├── ocr_engine.py # OCR 文字识别（PaddleOCR）

└── runner.py # 断言执行器

```

  

**功能**：

  

- 每次点击后自动验证操作是否成功

- 支持通过 YAML 配置文件定义断言规则

- 支持 OCR 识别屏幕文字进行验证

- 图像差异检测判断页面变化

  

### 3.7 Teams 模块（Multi-Agent 协作）

  

```

phone_agent/teams/

├── __init__.py # 导出 TeamCoordinator

└── coordinator.py # 团队协调器

```

  

**功能**：

  

- 多 Agent 协作完成复杂任务

- 任务分解和分配

- 结果汇总

  

### 3.8 Config 模块（配置管理）

  

```

phone_agent/config/

├── __init__.py # 导出配置函数

├── apps.py # Android 支持的应用列表

├── apps_harmonyos.py # 鸿蒙支持的应用列表

├── apps_ios.py # iOS 支持的应用列表

├── i18n.py # 国际化文本

├── prompts.py # 通用 Prompt 模板

├── prompts_zh.py # 中文 System Prompt

├── prompts_en.py # 英文 System Prompt

└── timing.py # 时序配置（延迟、等待时间）

```

  

**支持的应用分类**：

  

- **Android（50+ 款）**：微信、QQ、淘宝、京东、美团、抖音、小红书等

- **鸿蒙（60+ 款）**：在 Android 基础上增加华为原生应用

- **iOS**：通过 WebDriverAgent 支持 iOS 应用

  

### 3.9 Model 模块（AI 模型客户端）

  

```

phone_agent/model/

├── __init__.py # 导出 ModelClient、ModelConfig

└── client.py # OpenAI 兼容的模型客户端

```

  

**功能**：

  

- 通过 OpenAI 兼容 API 调用视觉语言模型

- 支持流式响应

- 解析模型的思考过程（thinking）和动作（action）

  

---

  

## 四、文档目录（docs/）

  

| 文件/目录 | 说明 |

|-----------|------|

| `ios_setup/ios_setup.md` | iOS 环境配置指南（WebDriverAgent 安装） |

| `ASSERTION_ISSUES_FIX.md` | 断言问题修复文档 |

| `ASSERTION_OPTIMIZATION.md` | 断言性能优化指南 |

| `SYNTAX_ERROR_FIX.md` | 语法错误修复文档 |

  

---

  

## 五、配置文件目录（configs/）

  

| 文件 | 说明 |

|------|------|

| `assertion_rules.yaml` | **断言规则配置**：定义正确/错误条件、期望/禁止出现的屏幕元素 |

  

---

  

## 六、测试用例目录（test_cases/）

  

| 文件 | 说明 |

|------|------|

| `run_reservation_order.py` | 预约下单测试用例 |

| `run_wechat_storage_bycode.py` | 微信小程序存储功能测试 |

  

---

  

## 七、脚本目录（scripts/）

  

| 文件 | 说明 |

|------|------|

| `check_deployment_cn.py` | 中文模型部署验证脚本 |

| `check_deployment_en.py` | 英文模型部署验证脚本 |

| `sample_messages.json` | 中文测试消息样本 |

| `sample_messages_en.json` | 英文测试消息样本 |

  

---

  

## 八、资源目录（resources/）

  

| 文件 | 说明 |

|------|------|

| `logo.svg` | 项目 Logo |

| `WECHAT.md` | 微信社区二维码 |

| `privacy_policy.txt` | 中文隐私政策 |

| `privacy_policy_en.txt` | 英文隐私政策 |

| `*.png, *.jpg` | 文档用截图 |

  

---

  

## 九、核心工作流程

  

### 9.1 任务执行流程

  

```

用户输入任务

↓

1. 截取当前屏幕 → 获取屏幕截图和当前应用名

↓

2. 构建消息 → System Prompt + 任务描述 + 屏幕信息 + 截图

↓

3. 调用视觉模型 → 返回 thinking（思考）和 action（动作）

↓

4. 解析动作 → 提取要执行的操作类型和参数

↓

5. 执行动作 → 通过 ADB/HDC/iOS 控制设备

↓

6. 断言验证（可选）→ 验证操作是否成功

↓

7. 循环继续 → 直到任务完成或达到最大步数

```

  

### 9.2 设备抽象层

  

```

DeviceFactory（设备工厂）

├── DeviceType.ADB → 使用 phone_agent.adb 模块

├── DeviceType.HDC → 使用 phone_agent.hdc 模块

└── DeviceType.IOS → 使用 phone_agent.xctest 模块

```

  

---

  

## 十、支持的模型

  

### 10.1 官方模型

  

| 模型 | 说明 |

|------|------|

| `AutoGLM-Phone-9B` | 中文优化模型 |

| `AutoGLM-Phone-9B-Multilingual` | 多语言模型 |

  

### 10.2 部署方式

  

**方式 A：第三方服务（推荐）**

  

- 智谱 BigModel：`https://open.bigmodel.cn/api/paas/v4`

- ModelScope：`https://api-inference.modelscope.cn/v1`

  

**方式 B：本地部署**

  

- vLLM 部署

- SGLang 部署

  

---

  

## 十一、使用方式

  

### 11.1 命令行使用

  

```bash

# 交互模式

python main.py --base-url http://localhost:8000/v1 --model "autoglm-phone-9b"

  

# 单次任务

python main.py --base-url http://localhost:8000/v1 "打开美团搜索附近的火锅店"

  

# 指定设备类型

python main.py --device-type hdc --base-url "..." "任务描述" # 鸿蒙

python main.py --device-type ios --base-url "..." "任务描述" # iOS

```

  

### 11.2 Python API

  

```python

from phone_agent import PhoneAgent

from phone_agent.model import ModelConfig

  

model_config = ModelConfig(base_url="http://localhost:8000/v1")

agent = PhoneAgent(model_config=model_config)

result = agent.run("打开淘宝搜索无线耳机")

```

  

---

  

## 十二、技术特点

  

1. **多设备支持**：统一接口支持 Android、鸿蒙、iOS

2. **视觉理解**：基于 AutoGLM 视觉语言模型理解界面

3. **断言验证**：每次操作后自动验证是否成功

4. **配置驱动**：通过 YAML 配置文件灵活调整行为

5. **多 Agent 协作**：支持复杂任务的多 Agent 分解

6. **远程调试**：支持 WiFi/网络远程连接设备

  

---

  

## 十三、项目统计

  

| 类别 | 数量 |

|------|------|

| Python 文件 | ~50 个 |

| 支持设备类型 | 3 种（ADB/HDC/iOS） |

| 支持应用 | 60+ 款 |

| 支持动作 | 10+ 种 |

| 文档语言 | 中文、英文 |

  

---

  # 如何自动化configs/assertion_rules.yaml
  - action_rules 定义规则
  - 动作类型
  - 动作类型的描述
  - 执行了动作过后，正确的时候是什么样，错误的时候是什么样子（correct_conditions， incorrect_conditions）