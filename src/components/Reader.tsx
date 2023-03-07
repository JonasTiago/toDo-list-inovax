import Logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className="w-full h-36 p-10 bg-lightgray flex items-center shadow-3xl ">
      <img src={Logo} alt="Logo Invax" className="w-32 "/>
      <div className=' w-0.5 h-17 bg-black mx-2.5 self-stretch'></div>
      <h1 className=' text-xl font-bold '>
        TO DO LIST
        <p className=" text-base font-normal">Teste de capacidade técnica</p>
      </h1>
    </header>
  );
}
