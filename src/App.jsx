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
    title: "AI 任務蒐集與解析",
    text: "使用者直接在 LINE 群組中交辦工作，AI 理解自然語言，自動擷取任務內容、負責人、截止日期等資訊。",
  },
  {
    icon: "✦",
    title: "任務管理",
    text: "透過 LIFF 查看、認領、完成與修改任務，掌握個人與團隊工作進度。",
  },
  {
    icon: "✦",
    title: "會議管理",
    text: "將 LINE 中的會議資訊獨立整理，避免會議與一般工作任務混在一起。",
  },
  {
    icon: "✦",
    title: "1:1 私訊推播",
    text: "在 LINE 免費訊息額度內，任務或重要通知可直接推播至指定成員的 LINE 私人聊天室，避免重要資訊被群組訊息淹沒。",
  },
  {
    icon: "✦",
    title: "LINE 通知與互動",
    text: "任務建立後即時回傳 LINE，支援直接認領、完成與婉拒等操作。",
  },
  {
    icon: "✦",
    title: "成員與團隊識別",
    text: "綁定 LINE 群組成員暱稱、團隊與部門資訊，協助 AI 正確辨識任務對象。",
  },
  {
    icon: "✦",
    title: "管理員任務管理",
    text: "管理員可統一管理群組任務、負責人與進度，掌握團隊整體工作狀況。",
  },
];

const comparisonRows = [
   ["LINE 直接建立任務", true, true, false, false],
  ["AI 自動辨識任務", true, false, true, true],
  ["自動擷取任務資訊", true, false, false, true],
  ["自動辨識負責人／團隊", true, false, false, false],
  ["不需改變 LINE 使用習慣", true, true, false, false],
  ["即時任務小卡", true, false, false, false],
  ["LINE 任務互動操作", true, false, false, false],
  ["任務生命週期管理", true, false, true, true],
  ["任務認領", true, false, true, true],
  ["任務狀態追蹤", true, false, true, true],
  ["管理員任務管理", true, false, true, true],
  ["企業權限管理", true, false, true, true],
  ["1:1 私訊推播", true, false, false, false],
  ["全群任務管理頁面", true, false, true, true],
  ["會議獨立管理", true, false, false, false],
];

function Check({ value }) {
  if (value === "△") return <span className="compare-dash">△</span>;

  return value ? (
    <span className="compare-check">✓</span>
  ) : (
    <span className="compare-x">×</span>
  );
}

function App() {
  return (
    <div className="site">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-logo">
              <span className="logo-s">S</span>
              <span className="logo-text">UROS</span>
            </div>

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

          <a href="#contact" className="nav-button">
            聯絡我們
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
              <span>LINE BOT</span>
              <span>AI / LLM</span>
              <span>LIFF</span>
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

          <div className="service-grid">
            {services.map((item, index) => (
              <article className="service-card" key={item.title}>
                <div className="service-icon">
                  {index === 0 ? "✦" : item.icon}
                </div>
                <div className="service-index">
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="service-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        {/* Scenario */}
        <section className="section scenario-section" id="scenario">
          <div className="section-heading centered">
            <div className="section-number">03 / 系統畫面</div>

            <h2>
              真實系統畫面，
              <br />
              <span>讓任務與會議各自清楚。</span>
            </h2>

            <p>
              從 LINE 對話中整理工作事項，
              <br />
              並將工作任務與會議資訊分開管理。
            </p>
          </div>

          <div className="system-showcase">

            {/* 我的任務 */}
            <div className="system-card">
              <div className="system-card-header">
                <span className="system-number">01</span>
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

            {/* 行事曆 */}
            <div className="system-card featured">
              <div className="system-card-header">
                <span className="system-number">02</span>
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

          </div>

          {/* 任務 / 會議分流 */}
          <div className="system-highlight">
            <div className="system-highlight-icon">✓</div>

            <div>
              <span>SEPARATE WORKFLOW</span>
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
            <div className="section-number">04 / 系統架構</div>
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
            <span>LINE Messaging API</span>
            <span>AI / LLM</span>
            <span>Supabase</span>
            <span>Edge Functions</span>
            <span>LIFF</span>
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
                      <strong>任務蒐集助理機器人</strong>
                      <small>我們的方案</small>
                    </div>
                  </th>
                  <th>
                    <div className="product-head">
                      <span className="product-dot gray">L</span>
                      <strong>LINE 人工管理</strong>
                    </div>
                  </th>
                  <th>
                    <div className="product-head">
                      <span className="product-dot gray">T</span>
                      <strong>Trello</strong>
                    </div>
                  </th>
                  <th>
                    <div className="product-head">
                      <span className="product-dot gray">A</span>
                      <strong>Asana</strong>
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

        {/* CTA */}
        <section className="cta-section" id="contact">
          <div className="cta-glow"></div>

          <div className="cta-content">
            <div className="section-number">START WITH YOUR WORKFLOW</div>

            <h2>
              讓每一句
              <br />
              <span>交辦都不再被遺漏。</span>
            </h2>

            <p>
              從現有的 LINE 工作環境開始，
              建立更簡單、更有效率的企業任務管理流程。
            </p>

            <div className="hero-actions">
              <a href="mailto:contact@example.com" className="primary-button">
                聯絡我們 <span>→</span>
              </a>

              <a href="#top" className="secondary-button">
                回到首頁
              </a>
            </div>
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