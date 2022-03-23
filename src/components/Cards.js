import {Card} from './Card';

const cards = [
  {title: 'All deserts', discount: '20% off', category: 'Deserty', imageSrc: 'cake', style: {color: '#4E60FF'}},
  {title: 'Big Burgers', discount: '50% off', category: 'Fooddies', imageSrc: 'burger', style: {color: '#FD6D22'}}
];

export function Cards() {
  return (
    <div className="cards__wrapper">
      {cards.map((item, index) => <Card key={index} {...item} />)}
    </div>
  );
}
