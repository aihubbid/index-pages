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
  ],
};

const PLATFORM_LABEL_KEYS = {
  "windows-x64": "platform.windows",
  "macos-arm64": "platform.macosArm",
  "macos-intel": "platform.macosIntel",
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
    "download.lede": "Choose the portable package for your platform. SHA-256 values are updated by the BoxClaw release workflow after each build.",
    "download.listTitle": "Latest downloads",
    "download.loading": "Loading release metadata...",
    "download.seed": "SHA-256 will appear after the next BoxClaw release updates this page.",
    "download.updated": "Release metadata updated.",
    "download.sha": "SHA-256",
    "download.size": "Size",
    "download.pending": "Pending release metadata",
    "download.copy": "Copy SHA-256",
    "download.copied": "Copied",
    "download.file": "File",
    "download.backHome": "Home",
    "platform.windows": "Windows x64 portable",
    "platform.macosArm": "macOS ARM portable",
    "platform.macosIntel": "macOS Intel portable",
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
    "download.lede": "选择适合你平台的便携压缩包。每次 BoxClaw 打版后，发布 workflow 会更新 SHA-256。",
    "download.listTitle": "最新下载",
    "download.loading": "正在加载发布元数据...",
    "download.seed": "下次 BoxClaw Release 更新本页面后会显示 SHA-256。",
    "download.updated": "发布元数据已更新。",
    "download.sha": "SHA-256",
    "download.size": "大小",
    "download.pending": "等待发布元数据",
    "download.copy": "复制 SHA-256",
    "download.copied": "已复制",
    "download.file": "文件",
    "download.backHome": "首页",
    "platform.windows": "Windows x64 便携版",
    "platform.macosArm": "macOS ARM 便携版",
    "platform.macosIntel": "macOS Intel 便携版",
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
    "download.lede": "利用する環境に合うポータブルパッケージを選択してください。SHA-256 は各リリース後に更新されます。",
    "download.listTitle": "最新ダウンロード",
    "download.loading": "リリース情報を読み込み中...",
    "download.seed": "次回の BoxClaw リリース後に SHA-256 が表示されます。",
    "download.updated": "リリース情報を更新しました。",
    "download.sha": "SHA-256",
    "download.size": "サイズ",
    "download.pending": "リリース情報待ち",
    "download.copy": "SHA-256 をコピー",
    "download.copied": "コピーしました",
    "download.file": "ファイル",
    "download.backHome": "ホーム",
    "platform.windows": "Windows x64 ポータブル",
    "platform.macosArm": "macOS ARM ポータブル",
    "platform.macosIntel": "macOS Intel ポータブル",
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
    "download.lede": "플랫폼에 맞는 포터블 패키지를 선택하세요. SHA-256 값은 각 릴리스 후 업데이트됩니다.",
    "download.listTitle": "최신 다운로드",
    "download.loading": "릴리스 메타데이터 로딩 중...",
    "download.seed": "다음 BoxClaw 릴리스 후 SHA-256이 표시됩니다.",
    "download.updated": "릴리스 메타데이터가 업데이트되었습니다.",
    "download.sha": "SHA-256",
    "download.size": "크기",
    "download.pending": "릴리스 메타데이터 대기 중",
    "download.copy": "SHA-256 복사",
    "download.copied": "복사됨",
    "download.file": "파일",
    "download.backHome": "홈",
    "platform.windows": "Windows x64 포터블",
    "platform.macosArm": "macOS ARM 포터블",
    "platform.macosIntel": "macOS Intel 포터블",
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
    "download.lede": "अपने platform के लिए portable package चुनें। हर BoxClaw release के बाद SHA-256 values update होती हैं।",
    "download.listTitle": "नवीनतम डाउनलोड",
    "download.loading": "Release metadata लोड हो रहा है...",
    "download.seed": "अगले BoxClaw release के बाद SHA-256 दिखाई देगा।",
    "download.updated": "Release metadata updated.",
    "download.sha": "SHA-256",
    "download.size": "आकार",
    "download.pending": "Release metadata pending",
    "download.copy": "SHA-256 copy करें",
    "download.copied": "Copied",
    "download.file": "फाइल",
    "download.backHome": "होम",
    "platform.windows": "Windows x64 पोर्टेबल",
    "platform.macosArm": "macOS ARM पोर्टेबल",
    "platform.macosIntel": "macOS Intel पोर्टेबल",
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

function renderDownloads(payload) {
  const list = document.getElementById("download-list");
  if (!list) return;
  list.textContent = "";
  const downloads = Array.isArray(payload?.downloads) ? payload.downloads : FALLBACK_DOWNLOADS.downloads;
  for (const item of downloads) {
    const article = document.createElement("article");
    article.className = "download-item";

    const meta = document.createElement("div");
    meta.className = "download-meta";
    const labelKey = PLATFORM_LABEL_KEYS[item.id];
    meta.append(createTextElement("h3", "", labelKey ? translate(labelKey) : item.label || item.id));
    meta.append(createTextElement("p", "", `${translate("download.file")}: ${item.fileName || ""}`));
    meta.append(createTextElement("p", "", `${translate("download.size")}: ${formatBytes(item.size)}`));
    const checksum = createTextElement("code", "checksum", item.sha256 || translate("download.pending"));
    meta.append(createTextElement("p", "", translate("download.sha")));
    meta.append(checksum);

    const actions = document.createElement("div");
    actions.className = "download-actions";
    const downloadLink = document.createElement("a");
    downloadLink.className = "download-button";
    downloadLink.href = item.url;
    downloadLink.rel = "noopener";
    downloadLink.textContent = translate("nav.download");
    actions.append(downloadLink);

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.type = "button";
    copyButton.textContent = translate("download.copy");
    copyButton.disabled = !item.sha256;
    copyButton.addEventListener("click", async () => {
      if (!item.sha256) return;
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
    const hasHashes = downloads.every((item) => typeof item.sha256 === "string" && item.sha256.length === 64);
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
