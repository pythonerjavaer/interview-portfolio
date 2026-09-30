# 傅饶 · 项目作品集

## [打开在线作品集](https://pythonerjavaer.github.io/interview-portfolio/)

面试时打开上面的网页，从五个项目入口进入交互展示。无需安装软件、登录或使用 Codex。

| 项目 | 在线入口 | 展示内容 |
| --- | --- | --- |
| 个人AI求职信息与决策辅助系统 | [打开网页](https://pythonerjavaer.github.io/interview-portfolio/projects/radar.html) | 合成岗位筛选、关注、跟进状态与来源说明 |
| 大模型辅助知识理解与证据问答 | [打开网页](https://pythonerjavaer.github.io/interview-portfolio/projects/reading.html) | 示例阅读、预设问答、证据定位与笔记 |
| AI科研论文评估与可信度核查（CS2-2） | [打开网页](https://pythonerjavaer.github.io/interview-portfolio/projects/papers.html) | 合成论文、多维评估记录、证据与报告下载 |
| TWE并购与融资决策分析 | [打开网页](https://pythonerjavaer.github.io/interview-portfolio/projects/twe.html) | 在线幻灯片、PPT下载、历史指标与融资试算 |
| 养老金生命周期策略研究 | [打开网页](https://pythonerjavaer.github.io/interview-portfolio/projects/retirement.html) | 在线幻灯片、PPT下载及1,000次浏览器情景模拟 |

## 演示范围

前三个软件页面是为公开展示重新编写的交互演示，使用合成或预设素材，不调用生产服务或大模型。CS2-2团队源码保持私有，没有复制到本仓库。

TWE页面分开标注历史研究数据与简化融资试算。养老金浏览器模型于2026年重建，部分参数来自原研究，修正了原宏将波动率平方后作为标准差的实现，并明确简化假设；它不是原Excel宏的在线执行，也不保证复现原报告结果。

## 演示文稿

- [TWE并购与融资分析 PPT](presentations/twe.pptx)
- [养老金生命周期策略 PPT](presentations/retirement.pptx)

均为面试展示版，重排内容并去掉课程编号、学号与小组分工页，保留真实贡献和必要来源说明。

## 相关项目资料

- [求职与AI工作台](https://github.com/pythonerjavaer/ai-chat)
- [阅读与学习平台](https://github.com/pythonerjavaer/literature-learning-platform)
- [金融案例、原Excel与证据说明](https://github.com/pythonerjavaer/finance-decision-case-studies)

## 计算验证与使用限制

浏览器模拟使用固定种子2023和共同随机数比较策略，已检查可复现性、零余额／零缴费、输入范围及冲击比较。真实利率转换、缴费时点和策略参数在页面展开说明中列明。没有把模拟值写成实际投资收益。

页面已检查桌面和手机尺寸，核心按钮、筛选、证据定位及模拟操作无需后台服务。不会上传输入、申请岗位或保存个人账户。阅读笔记及岗位跟进仅在当前页面保留，结果和笔记可自行下载。
