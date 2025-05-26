import React, { useState } from "react";
import "./MainContainer.css";

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * Main container for NoteEase: glassy effect, dual theme toggle,
   * FAB to add notes, accessible and visually appealing.
   * Core features (note list, search, categories) are structurally present.
   */
  const [theme, setTheme] = useState("light");

  // Theme CSS variables for light/dark mode
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--ne-bg", "rgba(25,32,45,0.85)");
      root.style.setProperty("--ne-bg2", "rgba(36,41,51,0.95)");
      root.style.setProperty("--ne-primary", "#4A90E2");
      root.style.setProperty("--ne-accent", "#F5A623");
      root.style.setProperty("--ne-text", "#FFF");
      root.style.setProperty("--ne-secondary", "#222");
      root.style.setProperty("--ne-glassblur", "12px");
    } else {
      root.style.setProperty("--ne-bg", "rgba(255,255,255,0.78)");
      root.style.setProperty("--ne-bg2", "rgba(254, 254, 255, 0.93)");
      root.style.setProperty("--ne-primary", "#4A90E2");
      root.style.setProperty("--ne-accent", "#F5A623");
      root.style.setProperty("--ne-text", "#212121");
      root.style.setProperty("--ne-secondary", "#f3f3f7");
      root.style.setProperty("--ne-glassblur", "10px");
    }
    // Change body background for fluid effect
    document.body.style.background =
      theme === "dark"
        ? "linear-gradient(135deg, #16181d 0%, #2b3340 100%)"
        : "linear-gradient(120deg, #e0e8f3 0%, #f6f9fe 100%)";
  }, [theme]);

  return (
    <div className="ne-main-container" data-theme={theme}>
      {/* Top bar: Logo, Theme toggle, Search */}
      <header className="ne-header glassy">
        <div className="ne-logo">
          <span className="ne-logo-symbol" aria-hidden="true">
            <b>✦</b>
          </span>
          <span style={{ fontWeight: 600, fontSize: "1.18rem" }}>
            NoteEase
          </span>
        </div>
        <div className="ne-header-actions">
          <button
            className="ne-theme-toggle"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "light" ? (
              // Moon icon for dark switch
              <span title="Dark mode" aria-hidden="true" role="img">🌙</span>
            ) : (
              // Sun icon for light switch
              <span title="Light mode" aria-hidden="true" role="img">☀️</span>
            )}
          </button>
          <input
            className="ne-search"
            aria-label="Search notes"
            placeholder="Search notes…"
            type="search"
            autoComplete="off"
            tabIndex={0}
          />
        </div>
      </header>

      {/* Categories/Tags Filter (structure only for now) */}
      <nav className="ne-categories glassy" aria-label="Categories">
        <ul>
          <li><button className="active" aria-current="true">All</button></li>
          <li><button>Work</button></li>
          <li><button>Personal</button></li>
          <li><button>Ideas</button></li>
        </ul>
      </nav>

      {/* Notes list placeholder */}
      <main className="ne-notes-list glassy" aria-label="Notes">
        <div className="ne-notes-empty">
          <p>No notes yet. <span role="img" aria-label="memo">📝</span></p>
          <small>
            Click the <b>Add new note</b> button below to create your first note.
          </small>
        </div>
      </main>

      {/* Floating action button: Add note */}
      <button
        className="ne-fab"
        aria-label="Add new note"
        title="Add new note"
      >
        +
      </button>
    </div>
  );
}

export default MainContainer;
