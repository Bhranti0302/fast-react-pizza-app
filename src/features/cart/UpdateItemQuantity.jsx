import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mb-4 flex items-center gap-3">
      <button
        className="h-7 w-7 rounded-full bg-stone-300 text-lg font-bold text-stone-800 hover:bg-stone-400"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        −
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="h-7 w-7 rounded-full bg-stone-300 text-lg font-bold text-stone-800 hover:bg-stone-400"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
