import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  cowData.getCows()
    .then((response) => {
      if (response.length) {
        $('#app').html('');
        response.forEach((item) => {
          $('#app').append(card.cowMaker(item));
        });
      } else {
        $('#app').html('');
        $('#app').append('<h2>NO COWS!</h2>');
      }
    });
};

export default { cowsView };
