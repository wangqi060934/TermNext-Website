import { FaMobileAlt } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import { MdDashboardCustomize } from "react-icons/md";
import { GrOptimize, GrDeploy } from "react-icons/gr";
import { FaEarthAsia } from "react-icons/fa6";

export const FeaturesList = {
  FRETURES_EN: [
    {
      icon: FaEarthAsia,
      title: "Built for HarmonyOS",
      description:
        "Optimized for HarmonyOS 5, built with ArkTS.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Optimized for the best display on mobile, tablet, and PC.",
    },
    {
      icon: MdDashboardCustomize,
      title: "Instant SSH Access",
      description: "Fast SSH access with password and key authentication.",
    },
    {
      icon: GoTerminal,
      title: "Interactive Terminal",
      description:
        "Interactive terminal with real-time I/O.",
    },
    {
      icon: GrOptimize,
      title: "Persistent Configuration",
      description:
        "Save and manage host configurations easily.",
    },
    {
      icon: GrDeploy,
      title: "Customizable Themes",
      description:
        "Customizable themes and font settings.",
    },
  ],

  FRETURES_ZH: [
    {
      icon: FaEarthAsia,
      title: "专为鸿蒙开发",
      description: "原生 ArkTS 构建，性能与安全并重",
    },
    {
      icon: FaMobileAlt,
      title: "响应式设计",
      description: "在手机、平板和电脑上均可获得最佳显示效果",
    },
    {
      icon: MdDashboardCustomize,
      title: "快速连接",
      description: "快速建立 SSH 连接，支持密码、密钥认证",
    },
    {
      icon: GoTerminal,
      title: "交互式终端",
      description: "像 PC 一样操作远程终端，实时输入输出",
    },
    {
      icon: GrOptimize,
      title: "配置持久保存",
      description: "一次设置，多次使用，支持导入导出",
    },
    {
      icon: GrDeploy,
      title: "自定义主题",
      description: "暗黑模式、字号、配色自由切换",
    },
  ],
};
