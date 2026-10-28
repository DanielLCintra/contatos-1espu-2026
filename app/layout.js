import { AuthProvider } from "./contexts/AuthContext";
import { ContactsProvider } from "./contexts/ContactsContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <AuthProvider>
          <ContactsProvider>
            {children}
          </ContactsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
