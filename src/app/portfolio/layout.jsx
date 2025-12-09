const layout = ({ children }) => {
  return (
    <div>
      <h1 className='lg:text-6xl font-bold md:text-5xl max-sm:text-4xl mb-3'>
        Our Works
      </h1>

      {children}
    </div>
  );
};

export default layout;
