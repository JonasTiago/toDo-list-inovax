import Accountants from './components/Accountants';
import Form from './components/Form';
import Header from './components/Reader';
import Tasks from './components/Tasks';

function App() {
  return (
    <section className="w-full h-screen box-border ">
      <Header />
      <div className="max-w-4xl mx-auto px-10 h-2/3 mt-16 flex flex-col">
        <Form />
        <Accountants />
        <Tasks />
      </div>
    </section>
  );
}

export default App;
