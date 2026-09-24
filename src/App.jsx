import "./App.css";

const painPoints = [
  {
    number: "01",
    title: "工作訊息容易被洗掉",
    text: "重要的交辦事項散落在大量 LINE 對話中，過了一段時間很難再次找到。",
  },
  {
    number: "02",
    title: "任務責任不清楚",
    text: "常出現「誰負責？」、「有人處理了嗎？」等情況，主管需要反覆確認。",
  },
  {
    number: "03",
    title: "缺乏進度追蹤",
    text: "任務建立後沒有統一管理方式，管理者很難快速掌握團隊目前進度。",
  },
  {
    number: "04",
    title: "工具太多反而降低使用率",
    text: "另外導入專案管理工具，需要學習新的操作流程，員工容易回到原本的 LINE 溝通方式。",
  },
];

const services = [
  {
    icon: "✦",
    title: "LINE 跨群組任務蒐集",
    text: "使用者直接在各 LINE 群組中交辦工作，AI 自動辨識並建立任務。",
  },
  {
    icon: "✦",
    title: "AI 自動化流程",
    text: "理解自然語言，自動擷取任務內容、負責人、截止日期等任務資訊。",
  },
  {
    icon: "✦",
    title: "1:1 私訊推播",
    text: "在 LINE 免費訊息額度內，將任務或重要通知推播至指定成員的私人聊天室。",
    custom: true,
  },
  {
    icon: "✦",
    title: "圖片識別",
    text: "AI 可分析 LINE 中的圖片內容，協助辨識圖片中的任務與相關資訊。",
  },
  {
    icon: "✦",
    title: "任務管理系統",
    text: "透過管理後台查看、認領、完成及管理任務內容，掌握團隊工作進度。",
  },
  {
    icon: "✦",
    title: "試算表連接",
    text: "將任務資料與企業現有的試算表串接，方便彙整、匯出與製作報表。",
    custom: true,
  },
  {
    icon: "✦",
    title: "會議管理系統",
    text: "將 LINE 中的會議資訊獨立整理，與一般工作任務清楚區隔。",
  },
  {
    icon: "✦",
    title: "LINE 通知與互動",
    text: "任務建立後即時回傳任務小卡，支援群組內直接認領、完成、婉拒及確認任務資訊。",
  },
  {
    icon: "✦",
    title: "Gmail 任務統整通知",
    text: "統整所有任務內容，透過 Gmail 寄送任務摘要與提醒給相關成員。",
    custom: true,
  },
  {
    icon: "✦",
    title: "群組成員暱稱綁定",
    text: "將群組成員暱稱與系統帳號、團隊或部門綁定，協助 AI 準確辨識任務負責人。",
  },
  {
    icon: "✦",
    title: "權限管理設定",
    text: "管理員可查看群組內所有任務，統一管理任務、負責人與任務進度。",
  },
];

const comparisonRows = [
  ["LINE 直接建立任務", true, true, false, false],
  ["AI 自動辨識任務擷取資訊", true, false, "△","△"],
  ["自動辨識負責人／團隊", true, false, false, false],
  ["圖片內容辨識", true, false, "△", "△"],
  ["不需改變 LINE 使用習慣", true, true, false, false],
  ["即時任務小卡", true, false, false, false],
  ["LINE 任務互動操作", true, true, false, false],
  ["1:1 LINE 私訊推播", true, true, false, false],
  ["會議資訊獨立管理", true, false,"△","△"],
];

function Check({ value }) {
  if (value === "△") return <span className="compare-dash">△</span>;

  return value ? (
    <span className="compare-check">✓</span>
  ) : (
    <span className="compare-x">—</span>
  );
}
function ServiceCard({ item, index }) {
  return (
    <article className={`service-card${item.custom ? " is-custom" : ""}`}>
      <div className="service-icon">{item.icon}</div>
      <div className="service-index">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <div className="service-arrow">↗</div>
    </article>
  );
}
function App() {
  return (
    <div className="site">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-inner">
           <a href="#top" className="brand">
            <img src="/images/logo.png" alt="SUROS" className="brand-logo" />

            <div>
              <strong>任務蒐集助理機器人</strong>
              <span>LINE BOT 任務管理</span>
            </div>
          </a>

          <nav>
            <a href="#problem">客戶痛點</a>
            <a href="#service">服務內容</a>
            <a href="#scenario">使用情境</a>
            <a href="#architecture">技術架構</a>
            <a href="#compare">方案比較</a>
          </nav>

          <a href="https://sites.google.com/suros.com.tw" 
             className="primary-button"
             target="_blank"
             rel="noopener noreferrer">
             回到官網
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero-grid"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              AI × LINE × TASK MANAGEMENT
            </div>

            <h1>
              讓 LINE 對話
              <br />
              <span>自動變成工作任務</span>
            </h1>

            <p>
              不改變團隊原本的工作習慣，
              <br />
              透過 AI 將日常對話轉化為可追蹤、可分派、可管理的工作任務。
            </p>

            <div className="hero-actions">
              <a href="#scenario" className="primary-button">
                查看實際情境 <span>→</span>
              </a>

              <a href="#compare" className="secondary-button">
                查看方案比較
              </a>
            </div>

            <div className="hero-tags">
              <span>LINE 跨群任務蒐集</span>
              <span>精準通知推播</span>
              <span>團隊管理儀表板</span>
              <span>AI 自動化流程</span>
              <span>企業流程客製化</span>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="hero-visual">
            <div className="floating-label label-ai">
              <span>✦</span>
              AI 自動分析
            </div>

            <div className="floating-label label-task">
              <span>✓</span>
              任務已建立
            </div>

            <div className="phone">
              <div className="phone-top">
                <span>9:41</span>
                <div className="phone-icons">● ● ▰</div>
              </div>

              <div className="line-header">
                <div className="line-avatar">T</div>
                <div>
                  <strong>專案工作群組</strong>
                  <small>12 位成員</small>
                </div>
              </div>

              <div className="chat">
                <div className="chat-date">今天 09:32</div>

                <div className="message">
                  <div className="message-name">王主管</div>
                  <div className="bubble">
                    小明，請幫忙整理上週客戶的報價資料，周五前給我。
                  </div>
                </div>

                <div className="ai-analysis">
                  <div className="ai-title">
                    <span>✦</span>
                    AI 已辨識為工作任務
                  </div>

                  <div className="task-card">
                    <div className="task-card-header">
                      <span className="task-badge">新任務</span>
                      <span className="task-menu">•••</span>
                    </div>

                    <h3>整理上週客戶報價資料</h3>

                    <div className="task-info">
                      <div>
                        <span>負責人</span>
                        <strong>小明</strong>
                      </div>

                      <div>
                        <span>截止日期</span>
                        <strong>09/13(這周五)</strong>
                      </div>
                    </div>

                    <button>查看任務</button>
                  </div>
                </div>

                <div className="message user-message">
                  <div className="message-name">小明</div>
                  <div className="bubble">收到，我會在星期五前完成。</div>
                </div>
              </div>

              <div className="phone-nav">
                <span>⌂<small>首頁</small></span>
                <span className="active">💬<small>聊天</small></span>
                <span>◷<small>VOOM</small></span>
                <span>●<small>TODAY</small></span>
                <span>▣<small>錢包</small></span>
              </div>
            </div>
          </div>
        </section>

  

        {/* Problem */}
        <section className="section problem-section" id="problem">
          <div className="section-heading">
            <div className="section-number">01 / 主要問題</div>
            <h2>
              工作訊息很多，
              <br />
              <span>真正重要的任務卻容易消失。</span>
            </h2>
            <p>
              LINE 已經是許多企業日常溝通的主要工具，
              但當工作事項大量混在聊天訊息中，就容易造成任務遺漏、責任不清與進度失控。
            </p>
          </div>

          <div className="problem-grid">
            {painPoints.map((item) => (
              <article className="problem-card" key={item.number}>
                <div className="problem-number">{item.number}</div>
                <div className="problem-line"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="solution-banner">
            <div className="solution-icon">✦</div>
            <div>
              <span>OUR SOLUTION</span>
              <h3>讓 AI 把「聊天」轉化成「可以被管理的工作」。</h3>
            </div>
            <div className="solution-arrow">→</div>
          </div>
        </section>

        {/* Services */}
        <section className="section service-section" id="service">
          <div className="section-heading centered">
            <div className="section-number">02 / 功能服務</div>
            <h2>
              從一句話開始，
              <br />
              <span>完成整個任務流程。</span>
            </h2>
            <p>
              不需要重新學習一套複雜的工作系統，
              直接利用團隊熟悉的 LINE 完成任務管理。
            </p>
          </div>

          <div className="service-legend">
            <span className="legend-star">✦</span>
            為客製化項目
          </div>

          <div className="service-grid">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={item.title} />
            ))}
          </div>

          <p className="service-note">
            ※ 客製化項目需依企業需求評估規劃，功能細節與費用請洽詢業務。
          </p>
        </section>
       {/* Scenario */}
        <section className="section scenario-section" id="scenario">
          <div className="section-heading centered">
            <div className="section-number">03 / 使用情境</div>

            <h2>
              從 LINE 對話開始，
              <br />
              <span>讓工作資訊自動被整理。</span>
            </h2>

            <p>
              AI 從日常 LINE 溝通中辨識工作與會議資訊，
              <br />
              自動轉換成清楚、可管理的工作內容。
            </p>
          </div>

          <div className="system-showcase">
            {/* LINE 任務抓取 */}
              <div className="system-card">
                <div className="system-card-header">
                  <span className="system-number">01</span>
                  <div>
                    <strong>LINE 任務智慧抓取</strong>
                    <p>文字、貼圖與圖片辨識</p>
                  </div>
                </div>

                <div className="phone-frame">
                  <img
                    src="/images/line-task-ai.png"
                    alt="LINE 任務與圖片辨識"
                  />
                </div>

                <div className="system-description">
                  AI 從 LINE 對話中辨識工作內容，
                  即使透過貼圖或圖片回覆，也能協助建立任務小卡。
                </div>
              </div>

             

            {/* 我的任務 */}
            <div className="system-card">
              <div className="system-card-header">
                <span className="system-number">02</span>
                <div>
                  <strong>我的任務</strong>
                  <p>個人工作事項</p>
                </div>
              </div>

              <div className="phone-frame">
                <img
                  src="/images/my-tasks.png"
                  alt="我的任務"
                />
              </div>

              <div className="system-description">
                集中查看自己需要處理的任務，
                掌握負責事項與目前進度。
              </div>
            </div>

            
            
            

            {/* 全群管理 */}
            <div className="system-card">
              <div className="system-card-header">
                <span className="system-number">03</span>
                <div>
                  <strong>全群管理</strong>
                  <p>團隊任務管理</p>
                </div>
              </div>

              <div className="phone-frame">
                <img
                  src="/images/all-tasks.png"
                  alt="全群任務管理"
                />
              </div>

              <div className="system-description">
                管理者查看群組內任務、
                負責人與進度，掌握團隊整體工作狀況。
              </div>
              
            </div>
           {/* 會議抓取 */}
              <div className="system-card">
                <div className="system-card-header">
                  <span className="system-number">04</span>
                  <div>
                    <strong>會議資訊抓取</strong>
                    <p>會議與任務分開管理</p>
                  </div>
                </div>

                <div className="phone-frame">
                  <img
                    src="/images/meeting-ai.png"
                    alt="會議資訊抓取"
                  />
                </div>

                <div className="system-description">
                  從 LINE 對話中辨識會議資訊，
                  並獨立整理至會議管理流程。
                </div>
              </div>
            {/* 行事曆 */}
            <div className="system-card featured">
              <div className="system-card-header">
                <span className="system-number">05</span>
                <div>
                  <strong>行事曆</strong>
                  <p>會議資訊管理</p>
                </div>
              </div>

              <div className="phone-frame">
                <img
                  src="/images/calendar.png"
                  alt="會議行事曆"
                />
              </div>

              <div className="system-description">
                專門整理會議與會議通知，
                讓會議資訊不與工作任務混在一起。
              </div>
            </div>
          </div>

          {/* 任務 / 會議分流 */}
          <div className="system-highlight">
            <div className="system-highlight-icon">✓</div>

            <div>
              <span>AI WORKFLOW</span>
              <h3>任務與會議分開管理</h3>
              <p>
                工作任務進入任務管理流程，
                會議則透過行事曆集中呈現，
                避免重要資訊混在一起。
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="section architecture-section" id="architecture">
          <div className="section-heading centered">
            <div className="section-number">04 / 服務流程</div>
            <h2>
              LINE × AI ×
              <br />
              <span>企業任務管理。</span>
            </h2>
            <p>
              透過 LINE、AI、LIFF 與後端服務串接，
              建立從訊息理解到任務管理的完整流程。
            </p>
          </div>

          <div className="architecture">
            <div className="architecture-node user-node">
              <div className="node-icon">人</div>
              <strong>企業使用者</strong>
              <span>主管／成員</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-node line-node">
              <div className="node-icon">L</div>
              <strong>LINE</strong>
              <span>群組工作訊息</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-node ai-node">
              <div className="node-icon">✦</div>
              <strong>AI / LLM</strong>
              <span>任務理解與資訊擷取</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-node backend-node">
              <div className="node-icon">DB</div>
              <strong>任務管理平台</strong>
              <span>API／資料庫／權限</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-node liff-node">
              <div className="node-icon">UI</div>
              <strong>LIFF</strong>
              <span>任務／日曆／進度</span>
            </div>
          </div>

          <div className="tech-tags">
              <span>LINE 即時蒐集</span>
              <span>AI 智慧辨識</span>
              <span>任務自動建立</span>
              <span>團隊集中管理</span>
              <span>精準通知推播</span>
            </div>
        </section>

        {/* Comparison */}
        <section className="section compare-section" id="compare">
          <div className="section-heading">
            <div className="section-number">05 / 與其他產品比較</div>
            <h2>
              不只是另一套
              <br />
              <span>專案管理工具。</span>
            </h2>
            <p>
              傳統工具強調「建立任務」，
              我們更著重於讓任務從日常溝通中自然產生。
            </p>
          </div>

          <div className="comparison-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>功能</th>

                  <th className="highlight-column">
                    <div className="product-head">
                      <strong>任務蒐集助理</strong>
                      <small>我們的方案</small>
                    </div>
                  </th>

                  <th>
                    <div className="product-head">
        
                      <strong>LINE 人工作業</strong>
                    </div>
                  </th>

                  <th>
                    <div className="product-head">
                     
                      <strong>一般任務管理工具</strong>
                    </div>
                  </th>

                  <th>
                    <div className="product-head">
          
                      <strong>企業專案管理系統</strong>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td className="highlight-column">
                      <Check value={row[1]} />
                    </td>
                    <td><Check value={row[2]} /></td>
                    <td><Check value={row[3]} /></td>
                    <td><Check value={row[4]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-note">
            <span>核心差異</span>
            <strong>
              不是要求使用者改變工作習慣，而是讓 AI 進入原本的工作流程。
            </strong>
          </div>
        </section>

        {/* Contact */}
        <section className="cta-section" id="contact">
          <div className="cta-glow"></div>

          <div className="cta-content">
            <div className="section-number">06 / 聯絡我們</div>

            <h2>
              讓每一句
              <br />
              <span>交辦都不再被遺漏。</span>
            </h2>

            <p>
              想了解導入方式、客製化項目或方案內容，
              歡迎直接與我們的業務團隊聯繫。
            </p>

            <div className="contact-grid">
              <a href="tel:+886227048866" className="contact-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <small>電話 TEL</small>
                  <strong>+886-2-2704-8866</strong>
                </div>
              </a>

              <a href="mailto:service1@suros.com.tw" className="contact-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <small>電子郵件 E-mail</small>
                  <strong>service1@suros.com.tw</strong>
                </div>
              </a>
            </div>

            <div className="contact-company">SUROS 誠士資訊股份有限公司</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <strong>任務蒐集助理機器人</strong>
          <span>LINE BOT 任務管理平台</span>
        </div>

        <div className="footer-links">
          <a href="#problem">客戶痛點</a>
          <a href="#service">服務內容</a>
          <a href="#scenario">使用情境</a>
          <a href="#compare">方案比較</a>
        </div>

        <p>© 2026 SUROS 誠士資訊股份有限公司</p>
      </footer>
    </div>
  );
}

export default App;