import "./PhoneMockups.css";

/* =========================================================
   圖示（線條 icon，顏色跟著文字走）
========================================================= */

const ICON_PATHS = {
  back: <polyline points="15 18 9 12 15 6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  more: (
    <>
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  close: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  camera: (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </>
  ),
  mic: (
    <>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  bar: (
    <>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  map: (
    <>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </>
  ),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  folder: (
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  clip: (
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  ),
  updown: (
    <>
      <polyline points="7 15 12 20 17 15" />
      <polyline points="7 9 12 4 17 9" />
    </>
  ),
  arrow: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

/* =========================================================
   共用外框
========================================================= */

function Phone({ theme, time, label, children }) {
  return (
    <div className={`mk-phone mk-phone--${theme}`} role="img" aria-label={label}>
      <div className="mk-screen">
        <div className="mk-status">
          <span>{time}</span>
          <span className="mk-status-icons">
            <span className="mk-signal">
              <i /><i /><i /><i />
            </span>
            <span className="mk-battery" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- LINE 聊天室 ---------- */

function LineHeader({ title }) {
  return (
    <div className="mk-line-header">
      <Icon name="back" />
      <strong>{title}</strong>
      <Icon name="search" />
      <Icon name="menu" />
    </div>
  );
}

function LineInput() {
  return (
    <div className="mk-line-input">
      <Icon name="plus" />
      <Icon name="camera" />
      <Icon name="image" />
      <div className="mk-line-field">
        <span>Aa</span>
        <Icon name="smile" />
      </div>
      <Icon name="mic" />
    </div>
  );
}

function Them({ name = "任務蒐集助理", avatar, color, time, bare, children }) {
  const isBot = !avatar;

  return (
    <div className="mk-msg">
      <span
        className={`mk-avatar${isBot ? " mk-avatar--bot" : ""}`}
        style={color ? { background: color } : undefined}
      >
        {isBot ? "助" : avatar}
      </span>

      <div className="mk-msg-body">
        <div className="mk-msg-name">{name}</div>
        <div className="mk-msg-row">
          {bare ? children : <div className="mk-bubble">{children}</div>}
          <span className="mk-time">{time}</span>
        </div>
      </div>
    </div>
  );
}

function Me({ time, read = 4, bare, children }) {
  return (
    <div className="mk-msg mk-msg--me">
      <span className="mk-meta">
        <span>已讀 {read}</span>
        <span>{time}</span>
      </span>
      {bare ? children : <div className="mk-bubble mk-bubble--me">{children}</div>}
    </div>
  );
}

/* ---------- LIFF 頁面 ---------- */

function LiffTop() {
  return (
    <div className="mk-liff-top">
      <div className="mk-liff-title">
        <strong>任務蒐集助理</strong>
        <small>linebot-task-liff.pages.dev</small>
      </div>
      <div className="mk-liff-top-icons">
        <Icon name="more" />
        <Icon name="close" />
      </div>
    </div>
  );
}

function PageHead({ icon, title }) {
  return (
    <div className="mk-page-head">
      <div>
        <div className="mk-page-title">
          <Icon name={icon} />
          {title}
        </div>
        <div className="mk-hi">Hi, 王小明</div>
      </div>

      <div className="mk-head-icons">
        <span className="mk-bell">
          <Icon name="bell" />
          <span className="mk-badge">3</span>
        </span>
        <Icon name="menu" />
      </div>
    </div>
  );
}

function PendingCard() {
  return (
    <div className="mk-pending">
      <div className="mk-pending-head">
        <span>
          <Icon name="zap" />
          待你處理 1 件
        </span>
        <small>
          行事曆 <Icon name="arrow" />
        </small>
      </div>

      <div className="mk-pending-item">
        <Icon name="calendar" />
        <div>
          <strong>案子討論會議</strong>
          <small>明天（2026-09-18）· A</small>
        </div>
        <span className="mk-pill">即將</span>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { key: "my", icon: "clipboard", label: "我的任務" },
  { key: "cal", icon: "calendar", label: "行事曆", badge: 1 },
  { key: "sheet", icon: "bar", label: "任務總表" },
  { key: "draft", icon: "edit", label: "任務草稿" },
  { key: "all", icon: "map", label: "全群管理" },
];

function BottomNav({ active }) {
  return (
    <div className="mk-nav">
      {NAV_ITEMS.map((item) => (
        <span key={item.key} className={item.key === active ? "is-active" : undefined}>
          <span className="mk-nav-icon">
            <Icon name={item.icon} />
            {item.badge && <span className="mk-badge">{item.badge}</span>}
          </span>
          {item.label}
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   01 LINE 任務智慧抓取
========================================================= */

export function LineTaskChatMock() {
  return (
    <Phone theme="line" time="17:52" label="LINE 群組中 AI 從對話與圖片建立任務的示意畫面">
      <LineHeader title="SUROS 專案群組 (6)" />

      <div className="mk-chat">
        <Me time="下午 5:48" bare>
          <div className="mk-shot">
            <div className="mk-shot-lines">
              <i />
              <i />
              <i style={{ width: "60%" }} />
            </div>
            <div className="mk-shot-poster">
              <small>2026 AUTUMN</small>
              <strong>秋季新品發表會</strong>
            </div>
          </div>
        </Me>

        <Me time="下午 5:48">
          <span className="mk-mention">@林小美</span> 了解一下回應
        </Me>

        <Them time="下午 5:49" bare>
          <div className="mk-flex">
            <div className="mk-flex-top">
              <span className="mk-flex-tag">📌 新任務</span>
              <span className="mk-flex-pri">優先中</span>
            </div>
            <strong>了解並回應客戶訊息</strong>
            <div className="mk-flex-meta">
              <span>👤 林小美</span>
              <span>⏰ 未指定</span>
            </div>
            <div className="mk-flex-warn">待補：期限</div>
            <div className="mk-flex-link">查看</div>
          </div>
        </Them>

        <Them name="林小美" avatar="美" color="#f59e0b" time="下午 5:50" bare>
          <div className="mk-sticker">🙆‍♀️</div>
        </Them>

        <Them time="下午 5:50">
          ✅ <b>林小美</b> 開始處理「了解並回應客戶訊息」
        </Them>
      </div>

      <LineInput />
    </Phone>
  );
}

/* =========================================================
   02 我的任務
========================================================= */

export function MyTasksMock() {
  return (
    <Phone theme="liff" time="10:45" label="任務蒐集助理「我的任務」頁面示意">
      <LiffTop />

      <div className="mk-app">
        <PageHead icon="clipboard" title="我的任務" />
        <PendingCard />

        <div className="mk-seg">
          <span className="is-active">
            我派發的 <span className="mk-count mk-count--green">3</span>
          </span>
          <span>
            我要負責的 <span className="mk-count">13</span>
          </span>
        </div>

        <div className="mk-btn mk-btn--green">＋ 新增任務</div>

        <div className="mk-field">搜尋標題、描述、負責人…</div>
        <div className="mk-field mk-field--select">
          全部群組（3）
          <Icon name="updown" />
        </div>
        <div className="mk-field mk-field--select">
          全部（3）
          <Icon name="updown" />
        </div>

        <div className="mk-card">
          <div className="mk-card-head">
            <span className="mk-dot" />
            <strong>了解並回應客戶訊息</strong>
            <small>已承接</small>
            <span className="mk-pill">進行中</span>
          </div>

          <div className="mk-folder">
            <Icon name="folder" />A
          </div>

          <div className="mk-card-desc">
            截圖為王總傳來的 LINE 訊息：①已更新與小桃園門市的報價…
          </div>

          <dl className="mk-kv">
            <dt>負責人</dt>
            <dd>林小美</dd>
            <dt>派發</dt>
            <dd>王小明</dd>
            <dt>期限</dt>
            <dd>未指定</dd>
            <dt>派發日</dt>
            <dd>2026/09/16</dd>
          </dl>

          <div className="mk-card-foot">
            <span className="mk-inline">
              <Icon name="clip" />1
            </span>
            <span>詳情 ›</span>
          </div>
        </div>
      </div>

      <BottomNav active="my" />
    </Phone>
  );
}

/* =========================================================
   03 全群管理
========================================================= */

export function AllTasksMock() {
  return (
    <Phone theme="liff" time="10:46" label="任務蒐集助理「全群管理」頁面示意">
      <LiffTop />

      <div className="mk-app">
        <PageHead icon="map" title="全群管理" />
        <PendingCard />

        <div className="mk-btn mk-btn--outline">
          <Icon name="download" />
          匯出 CSV
        </div>

        <div className="mk-field">搜尋標題、描述、負責人、群組…</div>

        <div className="mk-progress">
          <small>全體任務完成度</small>
          <div className="mk-progress-num">
            <strong>15%</strong>
            <span>4/26 已完成</span>
          </div>
          <div className="mk-bar">
            <i />
          </div>
        </div>

        <div className="mk-seg">
          <span className="is-active">總覽</span>
          <span>依群組</span>
        </div>

        <div className="mk-stats">
          <div className="mk-stat" style={{ "--c": "#ef4444" }}>
            <small>逾期</small>
            <strong>0</strong>
          </div>
          <div className="mk-stat" style={{ "--c": "#f59e0b" }}>
            <small>待安排</small>
            <strong>11</strong>
          </div>
          <div className="mk-stat" style={{ "--c": "#a855f7" }}>
            <small>缺期限</small>
            <strong>11</strong>
          </div>
          <div className="mk-stat" style={{ "--c": "#3b82f6" }}>
            <small>即將到期</small>
            <strong>0</strong>
          </div>
        </div>
      </div>

      <BottomNav active="all" />
    </Phone>
  );
}

/* =========================================================
   04 會議資訊抓取
========================================================= */

export function MeetingChatMock() {
  return (
    <Phone theme="line" time="10:42" label="LINE 群組中 AI 辨識會議並統計出席的示意畫面">
      <LineHeader title="SUROS 專案群組 (6)" />

      <div className="mk-chat">
        <Them time="下午 5:50">
          ✅ <b>林小美</b> 開始處理「了解並回應客戶訊息」
        </Them>

        <div className="mk-date">9/17（週四）</div>

        <Me time="上午 10:07">關於這個案子明天開個會</Me>

        <Them time="上午 10:08" bare>
          <div className="mk-flex">
            <div className="mk-flex-top">
              <span className="mk-flex-tag mk-flex-tag--meeting">📅 會議</span>
              <span className="mk-flex-pri">優先中</span>
            </div>
            <strong>案子討論會議</strong>
            <div className="mk-flex-meta">
              <span>👥 已知悉 1/5</span>
              <span>⏰ 明天（2026-09-18）</span>
            </div>
            <div className="mk-flex-meta">
              <span>參與：王小明 ✅</span>
            </div>
            <div className="mk-flex-note">
              被邀者按「參加」＝知悉出席；其他人按＝也要參加
            </div>
            <div className="mk-flex-actions">
              <span className="is-primary">參加</span>
              <span>查看</span>
            </div>
          </div>
        </Them>

        <Them name="陳志明" avatar="明" color="#f59e0b" time="上午 10:13">
          🙋 陳志明 確認出席「案子討論會議」（已知悉 2/5）
        </Them>

        <Them name="黃雅婷" avatar="婷" color="#ec4899" time="上午 10:26">
          🙋 黃雅婷 確認出席「案子討論會議」（已知悉 3/5）
        </Them>

        <Them name="李建宏" avatar="宏" color="#475569" time="上午 10:41">
          🙋 李建宏 確認出席「案子討論會議」（已知悉 4/5）
        </Them>
      </div>

      <LineInput />
    </Phone>
  );
}

/* =========================================================
   05 行事曆
========================================================= */

function MeetingItem({ title, status, statusType, group, date, host, ack, blue }) {
  return (
    <div className="mk-meet">
      <div className="mk-meet-head">
        <Icon name="calendar" />
        <strong>{title}</strong>
        <span className={`mk-pill mk-pill--${statusType}`}>{status}</span>
      </div>

      <div className="mk-folder">
        <Icon name="folder" />
        {group}
      </div>

      <div className="mk-meet-meta">
        <span className={blue ? "is-blue" : undefined}>
          <Icon name="clock" />
          {date}
        </span>
        <span>
          <Icon name="user" />
          {host}
        </span>
        <span>
          <Icon name="users" />
          已知悉 {ack}
        </span>
      </div>

      <div className="mk-meet-more">詳情 ›</div>
    </div>
  );
}

export function CalendarMock() {
  return (
    <Phone theme="liff" time="10:47" label="任務蒐集助理「行事曆」頁面示意">
      <LiffTop />

      <div className="mk-app">
        <PageHead icon="calendar" title="行事曆" />

        <div className="mk-cal-label">即將到來</div>
        <div className="mk-cal-date">明天 9/18（五）</div>
        <MeetingItem
          title="案子討論會議"
          status="已定案"
          statusType="green"
          group="A"
          date="明天（2026-09-18）"
          host="王小明"
          ack="4/5"
          blue
        />

        <div className="mk-cal-label mk-cal-label--muted">已結束</div>

        <div className="mk-cal-date">8/27（四）</div>
        <MeetingItem
          title="季度業務檢討會議"
          status="已結束"
          statusType="gray"
          group="誠士業務部"
          date="2026-08-27"
          host="王小明"
          ack="4/4"
        />

        <div className="mk-cal-date">8/21（五）</div>
        <MeetingItem
          title="服務建議書初版內容討論會議"
          status="已結束"
          statusType="gray"
          group="SUROS 內部實習小群組"
          date="8/21（五）"
          host="Sunny W"
          ack="2/3"
        />

        <div className="mk-cal-date">8/17（一）</div>
        <MeetingItem
          title="線上會議：討論服務建議書撰寫方向"
          status="已結束"
          statusType="gray"
          group="SUROS 內部實習小群組"
          date="8/17（一）"
          host="林小美"
          ack="3/3"
        />
      </div>

      <BottomNav active="cal" />
    </Phone>
  );
}