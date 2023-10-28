import { ThemeSwitcher } from '@/component/Theme';

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-full">
      <div className=" ">
        Navbar
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default HomePage;
