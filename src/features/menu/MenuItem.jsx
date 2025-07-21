import { useState } from 'react';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const [quantity, setQuantity] = useState(1);

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity,
      unitPrice,
      totalPrice: unitPrice * quantity,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="w-full max-w-xs rounded-xl border border-stone-200 bg-white p-4 shadow transition duration-200 hover:shadow-lg">
      {/* Pizza Image */}
      <img
        src={imageUrl}
        alt={name}
        className={`mb-4 h-40 w-full rounded-lg object-cover ${
          soldOut ? 'opacity-70 grayscale' : ''
        }`}
      />

      {/* Details */}
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-1 text-lg font-semibold text-stone-800">{name}</h3>
        <p className="mb-2 text-sm italic text-stone-500">
          {ingredients.join(', ')}
        </p>

        {!soldOut ? (
          <p className="mb-3 text-sm font-medium text-stone-700">
            {formatCurrency(unitPrice)}
          </p>
        ) : (
          <p className="mb-3 text-sm font-semibold uppercase text-stone-400">
            Sold out
          </p>
        )}

        {/* Quantity controls */}
        {!soldOut && isInCart && (
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
        )}

        {/* Action Buttons */}

        <div className="flex w-full items-center justify-between">
          {!soldOut && !isInCart && (
            <div className="flex flex-1 justify-center">
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            </div>
          )}

          {isInCart && (
            <div className="flex flex-1 justify-center">
              <DeleteItem pizzaId={id}>Delete</DeleteItem>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
