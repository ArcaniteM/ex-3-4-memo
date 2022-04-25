import './Tache.scss';
// La fonction formaterDateEtHeure est exportée par défaut dans le fichier util.js
// c'est la raison pour laquelle on peut l'importer sans les accolades {} ;-)
import formaterDateEtHeure from '../code/util';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import * as tacheModele from '../code/tache-modele';



export default function Tache({id, texte, completee, date, utilisateur, etatTaches, supprimerTache}) {

  function gererSupprimer() {
    // Appeler la fonction de ListeDossiers qui gère la suppression dans Firestore
    supprimerTache(id);

  }

  return (
    <div className="Tache">
      <IconButton color="success" className='btn-padding-reduit-gauche'>
        <CheckCircleIcon />
      </IconButton>
      <span className="texte">{texte}</span>
      <span className="date">({formaterDateEtHeure(date)})</span>
      <IconButton onClick={gererSupprimer} color="error" className='btn-padding-reduit-droite'>
        <RemoveCircleIcon  />
      </IconButton>
    </div>
  );
}