import "./globals.css";
export const metadata = { title: "Lore-Loop | Your life has lore", description: "Turn everyday moments into legendary stories." };
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#F6F1EA" };
export default function RootLayout({ children }) { return <html lang="en"><body>{children}</body></html>; }
