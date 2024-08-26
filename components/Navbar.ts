import React from 'react';
import Link from 'next/link';
import { useAppStore } from '../lib/store';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const user = useAppStore((state) => state.user);

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      {user ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;