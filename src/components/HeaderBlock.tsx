import Block from "./Block";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div className="flex justify-start items-start flex-col gap-2">
        <h1 className="font-1 text-4xl font-semibold leading-tight text-zinc-300">
          Hi, I'm Swetanshu.
        </h1>
        <p className="font-medium text-lg text-zinc-500">
          Full Stack Developer, currently working at{" "}
          <span className="underline underline-offset-2">SmallTownTalks</span>{" "}
          based in Jaipur.
        </p>
      </div>
    </Block>
  );
};

export default HeaderBlock;
