import { PlusCircleIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import PetCard from "../components/pets/PetCard.jsx";

function Pets() {
  const navigate = useNavigate();

  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const user = getUser();
  const isAdmin = user?.usuarioadmin === true;

  return (
    <>
      <Menu />
      <div className="pets-dashboard">
        <div className="pets-header">
          <div>
            <h1>Olá, {user?.nome}</h1>
            <p>Listagem dos pets cadastrados no nosso sistema.</p>
          </div>

          {/* ✅ Botão de adicionar pet (aparece só pra admin) */}
          {isAdmin && (
            <button
              className="btn-add-pet"
              onClick={() => navigate("/pets/novo")}
            >
              <PlusCircleIcon size={22} weight="fill" />
              Adicionar Pet
            </button>
          )}
        </div>
      </div>

      <PetCard />
    </>
  );
}

export default Pets;
