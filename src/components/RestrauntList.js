import { useSelector } from 'react-redux';
import {RestrauntCard} from './RestrauntCard';

export function RestrauntsList() {
  const restraunts = useSelector(state => state.restraunts.restraunts);

  return (
    <div className="restraunts">
      <h5 className="restraunts__heading">Nearby restraunts</h5>
      <div className="restraunts__container">
        {restraunts.filter(restraunt => restraunt.show).map((item, index) => <RestrauntCard key={index} {...item }/>)}
      </div>
    </div>
  );
}
