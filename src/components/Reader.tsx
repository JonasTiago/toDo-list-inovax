import Logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className="w-full h-36 p-10 bg-lightgray flex gap-3 items-center shadow-3xl mb-10">
      <img src={Logo} alt="Logo Invax" className="w-32 "/>
      <div className=' w-0.5 h-17 bg-black self-stretch'></div>
      <h1 className=' text-xl font-bold '>
        TO DO LIST
        <p className=" text-base font-normal">Teste de capacidade técnica</p>
      </h1>
    </header>
  );
}
