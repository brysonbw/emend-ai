import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center mt-auto text-xs">
      <div className="text-center text-gray-400 p-4">
        {`© ${new Date().getFullYear()}`}

        <Link className="text-primary hover:underline no-underline" href="/">
          &nbsp; Emend AI
        </Link>
      </div>
    </footer>
  );
}
