export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Set attribute before any rendering to prevent flashing
              const theme = localStorage.getItem('theme');
              const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (theme === 'dark' || (!theme && systemPreference)) {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              // Handle localStorage access errors (e.g., in private browsing)
              console.warn('Theme initialization failed:', e);
              // Fallback to system preference
              const systemPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (systemPreference) {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            }
          })();
        `,
      }}
    />
  )
}