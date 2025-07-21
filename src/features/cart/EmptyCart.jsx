import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <LinkButton
        to="/menu"
        className="mb-6 text-sm text-blue-600 underline hover:text-blue-800"
      >
        &larr; Back to menu
      </LinkButton>

      <p className="text-lg font-medium text-stone-700">
        Your cart is still empty.{' '}
        <span className="text-stone-500">Start adding some pizzas 🙂</span>
      </p>
    </div>
  );
}

export default EmptyCart;
