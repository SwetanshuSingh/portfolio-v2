import Block from "./Block";
import HeaderBlock from "./HeaderBlock";

const BentoGrid = () => {
  return (
    <main className="font-0 min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto max-w-4xl p-4 grid grid-cols-12 gap-4 grid-flow-dense">
        <HeaderBlock />
        <Block />
      </div>
    </main>
  );
};

export default BentoGrid;
