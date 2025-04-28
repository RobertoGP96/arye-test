const Home = () => {
  return (
    <div className="w-full grow flex justify-center items-center flex-col gap-3">
      <div className="flex flex-row gap-2 justify-center items-center flex-nowrap w-1/3">
        <a href="" className="w-full logo" target="_blank">
          <img src="/f-logo.svg" className=" w-full" alt="AR&E logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Siguenos en nuestras redes para que te actualices de nuestras ofertas.
      </p>
      <div className="flex justify-center items-center gap-3 cursor-pointer flex-row">
        <i className="pi pi-instagram"></i>
        <i className="pi pi-facebook"></i>
        <i className="pi pi-whatsapp"></i>
      </div>
    </div>
  );
};

export default Home;
