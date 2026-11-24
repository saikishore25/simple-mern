import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function App() {
    //   const [products, setProducts] = useState([]);
    //   const [product, setProduct] = useState(null);
    //   const [message, setMessage] = useState("");

    //   async function fetchProducts() {
    //     try {
    //       const res = await fetch(`${API}/api/products`);
    //       if (!res.ok) throw new Error("Could not fetch products");
    //       setProducts(await res.json());
    //       setMessage("");
    //     } catch {
    //       setMessage("API unavailable. Start the backend on port 5000.");
    //     }
    //   }

    //   async function fetchFirstProduct() {
    //     try {
    //       const res = await fetch(`${API}/api/products/1`);
    //       setProduct(await res.json());
    //     } catch {
    //       setMessage("API unavailable. Start the backend on port 5000.");
    //     }
    //   }

    //   async function addProduct() {
    //     try {
    //       const res = await fetch(`${API}/api/products`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ name: "Headphones", price: 2200 })
    //       });
    //       if (!res.ok) throw new Error();
    //       await fetchProducts();
    //       setMessage("Headphones added (in-memory demo data).");
    //     } catch {
    //       setMessage("Could not add product. Is the backend running?");
    //     }
    //   }

    //   useEffect(() => { fetchProducts(); }, []);

    return (
        // <main className="container">
        //   <header>
        //     <p className="eyebrow">REACT + EXPRESS</p>
        //     <h1>Simple MERN Demo</h1>
        //     <p className="subtitle">A tiny frontend connected to three API endpoints.</p>
        //   </header>

        //   {message && <div className="message">{message}</div>}

        //   <section className="panel">
        //     <div className="section-title">
        //       <h2>Products API</h2>
        //       <button onClick={fetchProducts}>GET all products</button>
        //     </div>
        //     <div className="products">
        //       {products.map(p => (
        //         <article className="product" key={p.id}>
        //           <span className="product-id">#{p.id}</span>
        //           <h3>{p.name}</h3>
        //           <p>₹{p.price.toLocaleString("en-IN")}</p>
        //         </article>
        //       ))}
        //     </div>
        //   </section>

        //   <section className="panel">
        //     <h2>Try the other endpoints</h2>
        //     <div className="actions">
        //       <button className="secondary" onClick={fetchFirstProduct}>GET /api/products/1</button>
        //       <button className="secondary" onClick={addProduct}>POST /api/products</button>
        //     </div>
        //     {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
        //   </section>
        //   <footer>Demo data resets when the backend restarts.</footer>
        // </main>

        <>
            App
        </>
    );
}
