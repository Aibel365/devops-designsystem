import { Outlet } from "react-router";
const Header = () => {
  return (
    <header className="ads:bg-blue-600 ads:text-white ads:p-4 ads:shadow-md">
      <div className="ads:container ads:mx-auto">
        <h1 className="ads:text-xl ads:font-bold">My Website</h1>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="ads:bg-gray-800 ads:text-white ads:p-4 ads:mt-auto">
      <div className="ads:container ads:mx-auto ads:text-center">
        <p>&copy; 2026 My Website</p>
      </div>
    </footer>
  );
};

const AibelDefaultLayout = () => {
  return (
    <div className="ads:flex ads:flex-col ads:min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AibelDefaultLayout;
