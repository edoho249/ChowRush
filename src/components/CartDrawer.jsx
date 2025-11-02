import React, { useState } from 'react'
import { useStore } from '../context/store'
import PaystackPop from '@paystack/inline-js'

export default function CartDrawer(){
  const [open, setOpen] = useState(false)
  const { cart, products, removeFromCart, total } = useStore()
  const items = Object.entries(cart)

  const handlePay = ()=>{
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxx',
      amount: total * 100,
      email: 'customer@example.com',
      onSuccess: (trx)=> alert('Payment complete! Ref: '+trx.reference),
      onCancel: ()=> alert('Payment cancelled'),
    })
  }

  return (
    <div>
      <button className="pill" onClick={()=>setOpen(v=>!v)}>Cart ({items.length})</button>
      {open && (
        <div style={{position:'fixed', top:0,right:0,bottom:0,width:360, background:'#fff', boxShadow:'-8px 0 24px rgba(0,0,0,.08)', padding:16, zIndex:50}}>
          <h3 style={{marginBottom:12}}>Your Cart</h3>
          <div style={{display:'flex',flexDirection:'column', gap:8, maxHeight:'70vh', overflow:'auto'}}>
            {items.length===0 && <p className="muted">No items yet.</p>}
            {items.map(([id,qty])=>{
              const p = products.find(x=> x.id===Number(id))
              if(!p) return null
              return (
                <div key={id} className="card" style={{display:'grid', gridTemplateColumns:'64px 1fr auto', alignItems:'center', gap:8, padding:8}}>
                  <div style={{width:64,height:64, background:'#f1f5f9'}}/>
                  <div>
                    <div style={{fontWeight:600}}>{p.name}</div>
                    <div className="muted">x{qty} • ₦{p.price.toLocaleString()}</div>
                  </div>
                  <button className="pill" onClick={()=>removeFromCart(p.id)}>Remove</button>
                </div>
              )
            })}
          </div>
          <div style={{marginTop:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>Total: ₦{total.toLocaleString()}</strong>
            <button className="btn" disabled={!items.length} onClick={handlePay}>Pay with Paystack</button>
          </div>
        </div>
      )}
    </div>
  )
}
