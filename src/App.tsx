import Form from './components/Form';
import Header from './components/Reader';

function App() {
  return (
    <>
      <Header />
      <div className=' max-w-4xl mx-auto mt-16 flex flex-col'>
        <Form />
      </div>
    </>
  );
}

export default App;
