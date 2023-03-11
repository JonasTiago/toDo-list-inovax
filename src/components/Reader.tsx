import Logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className=" w-full h-24 sm:h-36 p-3 sm:p-10 bg-lightgray flex justify-center gap-3 items-center shadow-3xl mb-5  md:justify-start">
      <img src={Logo} alt="Logo Invax" className="w-32 " />
      <div className=" w-0.5 h-17 bg-black self-stretch"></div>
      <h1 className=" text-xl font-bold ">
        TO DO LIST
        <p className=" sm:text-base text-xs font-normal">Teste de capacidade técnica</p>
      </h1>
    </header>
  );
}
