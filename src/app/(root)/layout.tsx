import Header from "@/components/shared/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
