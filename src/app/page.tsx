import RootLayout from "./layout";
// import { NavLinks } from "./ui/nav-links";

export default function Page(session: any) {
  return (
      <RootLayout session>
        {/* <NavLinks /> */}
        
        <nav className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-10">
          {/* Content inside RootLayout */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Page</h1>
            <p className="text-gray-700">This is a sample page content.</p>
          </div>
        </nav>
        
      </RootLayout>
  );
}
