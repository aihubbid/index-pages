const SUPPORTED_LANGUAGES = ["en", "zh-CN", "ja", "ko", "hi-IN"];

const FALLBACK_DOWNLOADS = {
  schemaVersion: "boxclaw-downloads.v1",
  product: "BoxClaw",
  releaseVersion: "0.1.2",
  metadataStatus: "seed",
  downloads: [
    {
      id: "windows-x64",
      label: "Windows x64 portable",
      fileName: "BoxClaw-0.1.2-windows-x64-portable.zip",
      url: "https://dl.aihub.bid/boxclaw/latest/BoxClaw-0.1.2-windows-x64-portable.zip",
      size: null,
      sha256: null,
    },
    {
      id: "macos-arm64",
      label: "macOS ARM portable",
      fileName: "BoxClaw-0.1.2-macos-arm64-portable.zip",
      url: "https://dl.aihub.bid/boxclaw/latest/BoxClaw-0.1.2-macos-arm64-portable.zip",
      size: null,
      sha256: null,
    },
    {
      id: "macos-intel",
      label: "macOS Intel portable",
      fileName: "BoxClaw-0.1.2-macos-intel-portable.zip",
      url: "https://dl.aihub.bid/boxclaw/latest/BoxClaw-0.1.2-macos-intel-portable.zip",
      size: null,
      sha256: null,
    },
    {
      id: "linux-x64",
      label: "Linux x64 portable",
      fileName: "BoxClaw-0.1.2-linux-x64-portable.zip",
      url: "https://dl.aihub.bid/boxclaw/latest/BoxClaw-0.1.2-linux-x64-portable.zip",
      size: null,
      sha256: null,
    },
  ],
};

const DOWNLOAD_URL_ORIGIN = "https://dl.aihub.bid";
const DOWNLOAD_URL_PATH_PREFIX = "/boxclaw/latest/";

const EXPECTED_DOWNLOAD_IDS = ["windows-x64", "macos-arm64", "macos-intel", "linux-x64"];

const PLATFORM_LABEL_KEYS = {
  "windows-x64": "platform.windows",
  "macos-arm64": "platform.macosArm",
  "macos-intel": "platform.macosIntel",
  "linux-x64": "platform.linux",
};

const PLATFORM_DESCRIPTION_KEYS = {
  "windows-x64": "platformDesc.windows",
  "macos-arm64": "platformDesc.macosArm",
  "macos-intel": "platformDesc.macosIntel",
  "linux-x64": "platformDesc.linux",
};

const PLATFORM_INSTRUCTION_KEYS = {
  "windows-x64": ["download.use.windows"],
  "macos-arm64": ["download.use.macos"],
  "macos-intel": ["download.use.macos"],
  "linux-x64": ["download.use.linux"],
};

const MESSAGES = {
  en: {
    "nav.home": "Home",
    "nav.platforms": "Platforms",
    "nav.models": "Models",
    "nav.skills": "Skills",
    "nav.download": "Download",
    "language.label": "Language",
    "home.eyebrow": "AIHub.bid presents",
    "home.title": "BoxClaw",
    "home.lede": "A portable AI control center for chat platforms, model channels and offline productivity skills.",
    "home.download": "Download BoxClaw",
    "home.explore": "Explore features",
    "home.platformsEyebrow": "Chat platform coverage",
    "home.platformsTitle": "Connect where teams already work.",
    "home.platformsReadyTitle": "Supported now",
    "home.platformsReadyText": "QQ, Feishu, WeChat, Telegram, Discord, WhatsApp and Slack are available for daily workflows.",
    "home.platformsSoonTitle": "Coming soon",
    "home.platformsSoonText": "WeCom and DingTalk support are planned next for enterprise communication scenarios.",
    "home.modelsEyebrow": "Model channels",
    "home.modelsTitle": "Multiple providers, one configuration flow.",
    "home.skillsEyebrow": "Offline productivity",
    "home.skillsTitle": "Preloaded skills that work without downloads.",
    "provider.qwen": "Tongyi Qianwen",
    "provider.zhipu": "Zhipu",
    "provider.doubao": "Doubao",
    "provider.qianfan": "Baidu Qianfan",
    "skill.email": "Email",
    "skill.notes": "Notes",
    "skill.drawing": "AI drawing",
    "skill.weather": "Weather",
    "skill.calendar": "Calendar",
    "download.eyebrow": "Portable builds",
    "download.title": "Download BoxClaw",
    "download.lede": "Choose the portable package for your platform, then verify the SHA-256 value before running it.",
    "download.listTitle": "Latest downloads",
    "download.loading": "Loading download information...",
    "download.seed": "SHA-256 is not complete yet. Wait for this page to show checksums before running a package.",
    "download.updated": "Download information loaded.",
    "download.sha": "SHA-256",
    "download.size": "Size",
    "download.pending": "Pending SHA-256",
    "download.copy": "Copy SHA-256",
    "download.copied": "Copied",
    "download.file": "File",
    "download.verify": "After downloading, verify the archive SHA-256 matches this page. If it does not match, do not run it and report the issue to support@aihub.bid.",
    "download.extract": "Extract the archive to a local hard drive or USB drive.",
    "download.firstUse": "On first use, configure your AI provider key. After changing configuration, click Save Configuration before Start, otherwise changes may not take effect.",
    "download.use.windows": "Windows: double-click Windows-Start.bat to start.",
    "download.use.macos": "MacOS: double-click Mac-Start.command, or open Terminal in the folder and run: bash Mac-Start.command.",
    "download.use.linux": "Linux: open Terminal in the folder and run: bash Linux-Start.command.",
    "download.backHome": "Home",
    "platform.windows": "Windows x64 portable",
    "platform.macosArm": "macOS ARM portable",
    "platform.macosIntel": "macOS Intel portable",
    "platform.linux": "Linux x64 portable",
    "platformDesc.windows": "For 64-bit Windows 10 and Windows 11.",
    "platformDesc.macosArm": "For Apple Silicon Macs running macOS 13 or later.",
    "platformDesc.macosIntel": "For Intel Macs running macOS 13 or later.",
    "platformDesc.linux": "For 64-bit Ubuntu, Fedora and other mainstream Linux desktop or server distributions.",
  },
  "zh-CN": {
    "nav.home": "首页",
    "nav.platforms": "聊天平台",
    "nav.models": "模型渠道",
    "nav.skills": "生产力技能",
    "nav.download": "下载",
    "language.label": "语言",
    "home.eyebrow": "AIHub.bid 出品",
    "home.title": "BoxClaw",
    "home.lede": "面向聊天平台、模型渠道和离线生产力技能的便携 AI 控制中心。",
    "home.download": "下载 BoxClaw",
    "home.explore": "查看特性",
    "home.platformsEyebrow": "聊天平台覆盖",
    "home.platformsTitle": "接入团队已经在使用的沟通入口。",
    "home.platformsReadyTitle": "当前支持",
    "home.platformsReadyText": "QQ、飞书、微信、Telegram、Discord、WhatsApp 和 Slack 可用于日常工作流。",
    "home.platformsSoonTitle": "即将支持",
    "home.platformsSoonText": "企业微信和钉钉正在规划中，用于企业协作场景。",
    "home.modelsEyebrow": "模型渠道",
    "home.modelsTitle": "多个供应商，一套配置流程。",
    "home.skillsEyebrow": "离线生产力",
    "home.skillsTitle": "预装技能离线可用，无需下载。",
    "provider.qwen": "通义千问",
    "provider.zhipu": "智谱",
    "provider.doubao": "豆包",
    "provider.qianfan": "百度千帆",
    "skill.email": "邮件",
    "skill.notes": "笔记",
    "skill.drawing": "AI 绘图",
    "skill.weather": "天气",
    "skill.calendar": "日程",
    "download.eyebrow": "便携版本",
    "download.title": "下载 BoxClaw",
    "download.lede": "选择适合你平台的便携压缩包，运行前务必核对 SHA-256。",
    "download.listTitle": "最新下载",
    "download.loading": "正在加载下载信息...",
    "download.seed": "SHA-256 暂未完整显示，下载前请等待本页面给出校验值。",
    "download.updated": "当前下载信息已加载。",
    "download.sha": "SHA-256",
    "download.size": "大小",
    "download.pending": "等待 SHA-256",
    "download.copy": "复制 SHA-256",
    "download.copied": "已复制",
    "download.file": "文件",
    "download.verify": "下载后务必检查压缩包的 SHA-256 是否和本页面一致；如果不一致，不要运行，并将问题反馈给 support@aihub.bid。",
    "download.extract": "下载后解压到本地硬盘或U盘。",
    "download.firstUse": "首次使用需要配置 AI 供应商 key，后续无需再次配置。修改完配置后记得点击右上角的“保存配置”后再“开始使用”，否则修改过的配置可能不生效。",
    "download.use.windows": "Windows：双击“Windows-Start.bat”，即可开始使用。",
    "download.use.macos": "MacOS：双击“Mac-Start.command”或在终端界面进入该目录后输入：“bash Mac-Start.command”，即可开始使用。",
    "download.use.linux": "Linux：在终端界面进入该目录后输入：“bash Linux-Start.command”，即可开始使用。",
    "download.backHome": "首页",
    "platform.windows": "Windows x64 便携版",
    "platform.macosArm": "macOS ARM 便携版",
    "platform.macosIntel": "macOS Intel 便携版",
    "platform.linux": "Linux x64 便携版",
    "platformDesc.windows": "适用于 64 位 Windows 10 和 Windows 11。",
    "platformDesc.macosArm": "适用于 Apple Silicon 芯片 Mac，建议 macOS 13 或更新版本。",
    "platformDesc.macosIntel": "适用于 Intel 芯片 Mac，建议 macOS 13 或更新版本。",
    "platformDesc.linux": "适用于 64 位 Ubuntu、Fedora 及其他主流 Linux 桌面或服务器发行版。",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.platforms": "プラットフォーム",
    "nav.models": "モデル",
    "nav.skills": "スキル",
    "nav.download": "ダウンロード",
    "language.label": "言語",
    "home.eyebrow": "AIHub.bid presents",
    "home.title": "BoxClaw",
    "home.lede": "チャット基盤、モデル接続、オフライン生産性スキルのためのポータブル AI コントロールセンター。",
    "home.download": "BoxClaw をダウンロード",
    "home.explore": "機能を見る",
    "home.platformsEyebrow": "チャット連携",
    "home.platformsTitle": "チームが使う場所へそのまま接続。",
    "home.platformsReadyTitle": "対応済み",
    "home.platformsReadyText": "QQ、Feishu、WeChat、Telegram、Discord、WhatsApp、Slack に対応しています。",
    "home.platformsSoonTitle": "近日対応",
    "home.platformsSoonText": "WeCom と DingTalk は企業向けシナリオとして対応予定です。",
    "home.modelsEyebrow": "モデルチャネル",
    "home.modelsTitle": "複数プロバイダーをひとつの設定フローで。",
    "home.skillsEyebrow": "オフライン生産性",
    "home.skillsTitle": "プリロード済みスキルは追加ダウンロードなしで利用できます。",
    "provider.qwen": "Tongyi Qianwen",
    "provider.zhipu": "Zhipu",
    "provider.doubao": "Doubao",
    "provider.qianfan": "Baidu Qianfan",
    "skill.email": "メール",
    "skill.notes": "ノート",
    "skill.drawing": "AI 描画",
    "skill.weather": "天気",
    "skill.calendar": "カレンダー",
    "download.eyebrow": "ポータブルビルド",
    "download.title": "BoxClaw ダウンロード",
    "download.lede": "利用する環境に合うポータブルパッケージを選び、実行前に SHA-256 を確認してください。",
    "download.listTitle": "最新ダウンロード",
    "download.loading": "ダウンロード情報を読み込み中...",
    "download.seed": "SHA-256 がまだ揃っていません。実行前にこのページのチェックサムを確認してください。",
    "download.updated": "ダウンロード情報を読み込みました。",
    "download.sha": "SHA-256",
    "download.size": "サイズ",
    "download.pending": "SHA-256 待ち",
    "download.copy": "SHA-256 をコピー",
    "download.copied": "コピーしました",
    "download.file": "ファイル",
    "download.verify": "ダウンロード後、アーカイブの SHA-256 がこのページと一致するか確認してください。一致しない場合は実行せず、support@aihub.bid へ連絡してください。",
    "download.extract": "アーカイブをローカルディスクまたは USB ドライブへ展開してください。",
    "download.firstUse": "初回利用時は AI プロバイダーキーを設定してください。設定変更後は Start の前に Save Configuration をクリックしてください。そうしないと変更が反映されない場合があります。",
    "download.use.windows": "Windows: Windows-Start.bat をダブルクリックして開始します。",
    "download.use.macos": "MacOS: Mac-Start.command をダブルクリックするか、フォルダーで Terminal を開いて bash Mac-Start.command を実行します。",
    "download.use.linux": "Linux: フォルダーで Terminal を開いて bash Linux-Start.command を実行します。",
    "download.backHome": "ホーム",
    "platform.windows": "Windows x64 ポータブル",
    "platform.macosArm": "macOS ARM ポータブル",
    "platform.macosIntel": "macOS Intel ポータブル",
    "platform.linux": "Linux x64 ポータブル",
    "platformDesc.windows": "64 bit 版 Windows 10 と Windows 11 向けです。",
    "platformDesc.macosArm": "Apple Silicon Mac、macOS 13 以降向けです。",
    "platformDesc.macosIntel": "Intel Mac、macOS 13 以降向けです。",
    "platformDesc.linux": "64 bit 版 Ubuntu、Fedora、その他主要な Linux デスクトップまたはサーバー向けです。",
  },
  ko: {
    "nav.home": "홈",
    "nav.platforms": "플랫폼",
    "nav.models": "모델",
    "nav.skills": "스킬",
    "nav.download": "다운로드",
    "language.label": "언어",
    "home.eyebrow": "AIHub.bid presents",
    "home.title": "BoxClaw",
    "home.lede": "채팅 플랫폼, 모델 채널, 오프라인 생산성 스킬을 위한 휴대용 AI 제어 센터입니다.",
    "home.download": "BoxClaw 다운로드",
    "home.explore": "기능 보기",
    "home.platformsEyebrow": "채팅 플랫폼 지원",
    "home.platformsTitle": "팀이 이미 일하는 공간에 연결합니다.",
    "home.platformsReadyTitle": "현재 지원",
    "home.platformsReadyText": "QQ, Feishu, WeChat, Telegram, Discord, WhatsApp, Slack을 지원합니다.",
    "home.platformsSoonTitle": "곧 지원",
    "home.platformsSoonText": "WeCom과 DingTalk는 기업 협업 시나리오를 위해 준비 중입니다.",
    "home.modelsEyebrow": "모델 채널",
    "home.modelsTitle": "여러 공급자를 하나의 설정 흐름으로 관리합니다.",
    "home.skillsEyebrow": "오프라인 생산성",
    "home.skillsTitle": "사전 설치된 스킬은 추가 다운로드 없이 사용할 수 있습니다.",
    "provider.qwen": "Tongyi Qianwen",
    "provider.zhipu": "Zhipu",
    "provider.doubao": "Doubao",
    "provider.qianfan": "Baidu Qianfan",
    "skill.email": "메일",
    "skill.notes": "노트",
    "skill.drawing": "AI 그림",
    "skill.weather": "날씨",
    "skill.calendar": "일정",
    "download.eyebrow": "포터블 빌드",
    "download.title": "BoxClaw 다운로드",
    "download.lede": "플랫폼에 맞는 포터블 패키지를 선택하고 실행 전에 SHA-256을 확인하세요.",
    "download.listTitle": "최신 다운로드",
    "download.loading": "다운로드 정보 로딩 중...",
    "download.seed": "SHA-256이 아직 완전하지 않습니다. 실행 전 이 페이지의 체크섬을 확인하세요.",
    "download.updated": "다운로드 정보를 불러왔습니다.",
    "download.sha": "SHA-256",
    "download.size": "크기",
    "download.pending": "SHA-256 대기 중",
    "download.copy": "SHA-256 복사",
    "download.copied": "복사됨",
    "download.file": "파일",
    "download.verify": "다운로드 후 압축 파일의 SHA-256이 이 페이지와 일치하는지 확인하세요. 일치하지 않으면 실행하지 말고 support@aihub.bid 로 알려주세요.",
    "download.extract": "압축 파일을 로컬 디스크 또는 USB 드라이브에 풀어주세요.",
    "download.firstUse": "처음 사용할 때 AI 공급자 key를 설정하세요. 설정을 바꾼 뒤에는 Start 전에 Save Configuration을 눌러야 변경 사항이 적용됩니다.",
    "download.use.windows": "Windows: Windows-Start.bat를 더블 클릭하면 시작됩니다.",
    "download.use.macos": "MacOS: Mac-Start.command를 더블 클릭하거나 폴더에서 Terminal을 열고 bash Mac-Start.command를 실행하세요.",
    "download.use.linux": "Linux: 폴더에서 Terminal을 열고 bash Linux-Start.command를 실행하세요.",
    "download.backHome": "홈",
    "platform.windows": "Windows x64 포터블",
    "platform.macosArm": "macOS ARM 포터블",
    "platform.macosIntel": "macOS Intel 포터블",
    "platform.linux": "Linux x64 포터블",
    "platformDesc.windows": "64비트 Windows 10 및 Windows 11용입니다.",
    "platformDesc.macosArm": "Apple Silicon Mac, macOS 13 이상용입니다.",
    "platformDesc.macosIntel": "Intel Mac, macOS 13 이상용입니다.",
    "platformDesc.linux": "64비트 Ubuntu, Fedora 및 기타 주요 Linux 데스크톱 또는 서버 배포판용입니다.",
  },
  "hi-IN": {
    "nav.home": "होम",
    "nav.platforms": "प्लेटफॉर्म",
    "nav.models": "मॉडल",
    "nav.skills": "स्किल",
    "nav.download": "डाउनलोड",
    "language.label": "भाषा",
    "home.eyebrow": "AIHub.bid presents",
    "home.title": "BoxClaw",
    "home.lede": "चैट प्लेटफॉर्म, मॉडल चैनल और ऑफलाइन उत्पादकता स्किल के लिए पोर्टेबल AI कंट्रोल सेंटर।",
    "home.download": "BoxClaw डाउनलोड करें",
    "home.explore": "फीचर देखें",
    "home.platformsEyebrow": "चैट प्लेटफॉर्म कवरेज",
    "home.platformsTitle": "जहां आपकी टीम काम करती है, वहीं कनेक्ट करें।",
    "home.platformsReadyTitle": "अभी समर्थित",
    "home.platformsReadyText": "QQ, Feishu, WeChat, Telegram, Discord, WhatsApp और Slack दैनिक workflow के लिए उपलब्ध हैं।",
    "home.platformsSoonTitle": "जल्द आ रहा है",
    "home.platformsSoonText": "WeCom और DingTalk enterprise collaboration के लिए अगली योजना में हैं।",
    "home.modelsEyebrow": "मॉडल चैनल",
    "home.modelsTitle": "कई provider, एक configuration flow.",
    "home.skillsEyebrow": "ऑफलाइन उत्पादकता",
    "home.skillsTitle": "Preloaded skills बिना download के offline काम करते हैं।",
    "provider.qwen": "Tongyi Qianwen",
    "provider.zhipu": "Zhipu",
    "provider.doubao": "Doubao",
    "provider.qianfan": "Baidu Qianfan",
    "skill.email": "ईमेल",
    "skill.notes": "नोट्स",
    "skill.drawing": "AI drawing",
    "skill.weather": "मौसम",
    "skill.calendar": "कैलेंडर",
    "download.eyebrow": "पोर्टेबल बिल्ड",
    "download.title": "BoxClaw डाउनलोड",
    "download.lede": "अपने platform के लिए portable package चुनें और चलाने से पहले SHA-256 verify करें।",
    "download.listTitle": "नवीनतम डाउनलोड",
    "download.loading": "Download information लोड हो रहा है...",
    "download.seed": "SHA-256 अभी पूरा नहीं है। Package चलाने से पहले इस page पर checksum दिखने दें।",
    "download.updated": "Download information loaded.",
    "download.sha": "SHA-256",
    "download.size": "आकार",
    "download.pending": "SHA-256 pending",
    "download.copy": "SHA-256 copy करें",
    "download.copied": "Copied",
    "download.file": "फाइल",
    "download.verify": "Download के बाद archive का SHA-256 इस page से मिलाएँ। अगर match नहीं करता, उसे न चलाएँ और support@aihub.bid पर report करें।",
    "download.extract": "Archive को local hard drive या USB drive में extract करें।",
    "download.firstUse": "पहली बार AI provider key configure करें। Configuration बदलने के बाद Start से पहले Save Configuration क्लिक करें, नहीं तो बदलाव लागू नहीं हो सकते।",
    "download.use.windows": "Windows: शुरू करने के लिए Windows-Start.bat double-click करें।",
    "download.use.macos": "MacOS: Mac-Start.command double-click करें, या folder में Terminal खोलकर bash Mac-Start.command चलाएँ।",
    "download.use.linux": "Linux: folder में Terminal खोलकर bash Linux-Start.command चलाएँ।",
    "download.backHome": "होम",
    "platform.windows": "Windows x64 पोर्टेबल",
    "platform.macosArm": "macOS ARM पोर्टेबल",
    "platform.macosIntel": "macOS Intel पोर्टेबल",
    "platform.linux": "Linux x64 पोर्टेबल",
    "platformDesc.windows": "64-bit Windows 10 और Windows 11 के लिए।",
    "platformDesc.macosArm": "Apple Silicon Mac और macOS 13 या नए version के लिए।",
    "platformDesc.macosIntel": "Intel Mac और macOS 13 या नए version के लिए।",
    "platformDesc.linux": "64-bit Ubuntu, Fedora और अन्य mainstream Linux desktop या server distributions के लिए।",
  },
};

function normalizeLanguage(language) {
  if (!language) return "en";
  const value = language.toLowerCase();
  if (value.startsWith("zh")) return "zh-CN";
  if (value.startsWith("ja")) return "ja";
  if (value.startsWith("ko")) return "ko";
  if (value.startsWith("hi")) return "hi-IN";
  return "en";
}

function getInitialLanguage() {
  const stored = localStorage.getItem("aihub-language");
  if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
  for (const language of navigator.languages || [navigator.language]) {
    const normalized = normalizeLanguage(language);
    if (SUPPORTED_LANGUAGES.includes(normalized)) return normalized;
  }
  return "en";
}

function translate(key) {
  const dictionary = MESSAGES[currentLanguage] || MESSAGES.en;
  return dictionary[key] || MESSAGES.en[key] || key;
}

let currentLanguage = getInitialLanguage();

function applyLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  localStorage.setItem("aihub-language", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translate(node.dataset.i18n);
  });
  const select = document.getElementById("language-select");
  if (select) select.value = currentLanguage;
  renderDownloads(window.__boxclawDownloads || FALLBACK_DOWNLOADS);
}

function formatBytes(size) {
  if (!Number.isFinite(size) || size <= 0) return translate("download.pending");
  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function isValidSha256(value) {
  return typeof value === "string" && /^[a-f0-9]{64}$/i.test(value);
}

function getSafeDownloadUrl(value) {
  try {
    const url = new URL(value);
    if (url.origin === DOWNLOAD_URL_ORIGIN && url.pathname.startsWith(DOWNLOAD_URL_PATH_PREFIX)) {
      return url.href;
    }
  } catch {
    return "";
  }
  return "";
}

function normalizeDownloads(payload) {
  const fallbackById = new Map(FALLBACK_DOWNLOADS.downloads.map((item) => [item.id, item]));
  const sourceDownloads = Array.isArray(payload?.downloads) ? payload.downloads : [];
  const sourceById = new Map(
    sourceDownloads
      .filter((item) => typeof item?.id === "string")
      .map((item) => [item.id, item]),
  );
  const normalized = EXPECTED_DOWNLOAD_IDS
    .map((id) => sourceById.get(id) || fallbackById.get(id))
    .filter(Boolean);
  for (const item of sourceDownloads) {
    if (typeof item?.id === "string" && !EXPECTED_DOWNLOAD_IDS.includes(item.id)) {
      normalized.push(item);
    }
  }
  return normalized;
}

function renderDownloads(payload) {
  const list = document.getElementById("download-list");
  if (!list) return;
  list.textContent = "";
  const downloads = normalizeDownloads(payload);
  for (const item of downloads) {
    const article = document.createElement("article");
    article.className = "download-item";

    const meta = document.createElement("div");
    meta.className = "download-meta";
    const labelKey = PLATFORM_LABEL_KEYS[item.id];
    const descriptionKey = PLATFORM_DESCRIPTION_KEYS[item.id];
    meta.append(createTextElement("h3", "", labelKey ? translate(labelKey) : item.label || item.id));
    if (descriptionKey) {
      meta.append(createTextElement("p", "platform-note", translate(descriptionKey)));
    }
    meta.append(createTextElement("p", "", `${translate("download.file")}: ${item.fileName || ""}`));
    meta.append(createTextElement("p", "", `${translate("download.size")}: ${formatBytes(item.size)}`));
    const hasChecksum = isValidSha256(item.sha256);
    const checksum = createTextElement("code", "checksum", hasChecksum ? item.sha256 : translate("download.pending"));
    meta.append(createTextElement("p", "", translate("download.sha")));
    meta.append(checksum);
    const instructionKeys = PLATFORM_INSTRUCTION_KEYS[item.id] || [];
    if (instructionKeys.length > 0) {
      const instructions = document.createElement("ul");
      instructions.className = "download-usage";
      for (const key of instructionKeys) {
        instructions.append(createTextElement("li", "", translate(key)));
      }
      meta.append(instructions);
    }

    const actions = document.createElement("div");
    actions.className = "download-actions";
    const downloadLink = document.createElement("a");
    downloadLink.className = "download-button";
    const safeUrl = getSafeDownloadUrl(item.url);
    downloadLink.href = safeUrl && hasChecksum ? safeUrl : "#";
    downloadLink.rel = "noopener";
    if (!safeUrl || !hasChecksum) {
      downloadLink.setAttribute("aria-disabled", "true");
    }
    downloadLink.textContent = translate("nav.download");
    actions.append(downloadLink);

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.type = "button";
    copyButton.textContent = translate("download.copy");
    copyButton.disabled = !hasChecksum;
    copyButton.addEventListener("click", async () => {
      if (!hasChecksum) return;
      await navigator.clipboard.writeText(item.sha256);
      copyButton.textContent = translate("download.copied");
      setTimeout(() => {
        copyButton.textContent = translate("download.copy");
      }, 1600);
    });
    actions.append(copyButton);

    article.append(meta, actions);
    list.append(article);
  }

  const metadata = document.getElementById("download-metadata");
  if (metadata) {
    const hasHashes = downloads.every((item) => isValidSha256(item.sha256));
    metadata.textContent = hasHashes ? translate("download.updated") : translate("download.seed");
  }
}

async function loadDownloads() {
  if (!document.getElementById("download-list")) return;
  try {
    const response = await fetch("data/boxclaw-downloads.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`metadata ${response.status}`);
    const payload = await response.json();
    window.__boxclawDownloads = payload;
    renderDownloads(payload);
  } catch {
    window.__boxclawDownloads = FALLBACK_DOWNLOADS;
    renderDownloads(FALLBACK_DOWNLOADS);
  }
}

document.getElementById("language-select")?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

window.topFunction = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("back-to-top");
  const scrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
  navbar?.classList.toggle("nav-sticky", scrolled);
  if (backToTop) backToTop.style.display = scrolled ? "block" : "none";
});

applyLanguage(currentLanguage);
loadDownloads();
