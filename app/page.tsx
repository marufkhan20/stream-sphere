import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex justify-between gap-5">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
