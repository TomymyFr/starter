import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import styles from '../../styles/App.module.css'
import { useState, useEffect} from "react";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('selected_product')))
    console.log(products)
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <Navbar />
        { products && (
          <Card title={products.title} image={products.image} desc={products.desc} price={products.price} />
        )}
      </main>
    </div>
  )
}