'use client'

export default function SkipLinks() {
  const skipLinks = [
    { href: '#main', label: 'Skip to main content' },
    { href: '/about', label: 'Go to about page' },
    { href: '/skills', label: 'Go to skills page' },
    { href: '/projects', label: 'Go to projects page' },
    { href: '/contact', label: 'Go to contact page' },
  ]

  return (
    <div className="sr-only focus-within:not-sr-only">
      <ul className="fixed top-0 left-0 z-50 bg-blue-600 text-white p-2 space-y-1">
        {skipLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded focus:outline-none focus:ring-2 focus:ring-white text-sm"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault()
                  const target = document.querySelector(link.href)
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                    // Focus the target element for screen readers
                    if (target instanceof HTMLElement) {
                      target.focus({ preventScroll: true })
                    }
                  }
                } else {
                  // Let the browser handle navigation for page links
                  window.location.href = link.href
                }
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}