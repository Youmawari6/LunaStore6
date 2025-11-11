import { useCart } from '../context/CartContext'


export default function Cart() {
const { cart, remove, clear } = useCart()
const total = cart.reduce((s, p) => s + p.price * (1 - (p.discount || 0)), 0).toFixed(2)


return (
<div className="max-w-4xl mx-auto px-6 py-8">
<h2 className="text-2xl font-semibold mb-4">Cart</h2>
<div className="space-y-3">
{cart.map(item => (
<div key={item.id} className="p-3 bg-[#071833] rounded flex items-center justify-between">
<div>
<div className="font-semibold">{item.title}</div>
<div className="text-sm opacity-80">${(item.price * (1 - (item.discount || 0))).toFixed(2)}</div>
</div>
<button onClick={() => remove(item.id)} className="px-3 py-1 border rounded">Remove</button>
</div>
))}
</div>


<div className="mt-6 flex justify-between items-center">
<div className="text-lg">Total: ${total}</div>
<div className="flex gap-3">
<button onClick={clear} className="px-4 py-2 border rounded">Clear</button>
<button className="px-4 py-2 bg-[var(--gv-blue)] rounded">Checkout</button>
</div>
</div>
</div>
)
}