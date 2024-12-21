'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {currentYear} Fitahiana Moussa. Tous droits réservés.
        </p>
        <div className="mt-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline mx-2">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline mx-2">GitHub</a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
