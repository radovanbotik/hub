import Table from "./Table";

const List = props => {
  const { setDestination, setOpen } = props;
  return (
    <section className="text-inherit">
      {/* add container */}
      <div className="container mx-auto flex flex-col items-center px-4 py-4 md:py-8 md:px-10 lg:px-8 lg:max-w-6xl xl:max-w-6xl">
        <Table setDestination={setDestination} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default List;
