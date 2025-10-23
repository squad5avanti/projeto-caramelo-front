import Menu from '../components/Menu.jsx';
import PetCard from '../components/pets/PetCard.jsx';

function Pets() {

    const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

    const user = getUser();

  return (
    <>
      <Menu />
      <div className='pets-dashboard'>
        <div>
            <h1>Olá, {user.nome}</h1>
            <p>Resumo das principais estatísticas.</p>
        </div>
      </div>
      <PetCard />
    </>
  );
}

export default Pets;