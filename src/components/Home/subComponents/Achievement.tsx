const Achievement = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-[5rem] px-[2rem] md:px-[5rem] lg:px-[8rem] text-[white] text-center gap-[2rem] bg-[#0077B9]">
      <div>
        <h1 className="font-[Roboto] text-[2.5rem] font-bold">5+</h1>
        <p className="font-['Roboto']">Years of Experience</p>
      </div>

      <div>
        <h1 className="font-[Roboto] text-[2.5rem] font-bold">3000 +</h1>
        <p className="font-['Roboto']">Customers</p>
      </div>

      <div>
        <h1 className="font-[Roboto] text-[2.5rem] font-bold">20 +</h1>
        <p className="font-['Roboto']">Employees</p>
      </div>

      <div>
        <h1 className="font-[Roboto] text-[2.5rem] font-bold">23</h1>
        <p className="font-['Roboto']">Nominations</p>
      </div>
    </div>
  );
};

export default Achievement;
