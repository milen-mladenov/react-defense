import { useState } from 'react'
import styles from '../InventoryScreen.module.css'


export const ItemCreation = ({ item }) => {
    const [input, setInput] = useState(item);

    function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        setInput(old => ({
            ...old,
            [name]: value
        }))
    }
    return (
        <div className={styles.item}>
            <label htmlFor="productCode">
                <p>Product code</p>
                <input type="text" name="productCode" placeholder="productCode" onChange={handleInput} value={input.productCode} />
            </label>
            <label htmlFor="product">
                <p>product</p>
                <input type="text" name="product" placeholder="product" onChange={handleInput} value={input.productName} />
            </label>
            <label htmlFor="id">
                <p>product number</p>
                <input type="text" name="id" placeholder="id" onChange={handleInput} value={input.id} />
            </label>
            <label htmlFor="expiration">
                <p>expiration</p>
                <input type="date" name="expiration" placeholder="expiration" onChange={handleInput} value={input.expirationDate} />
            </label>
            <label htmlFor="retailPrice">
                <p>retail price</p>
                <input type="text" name="retailPrice" placeholder="retailPrice" onChange={handleInput} value={input.retailPrice} />
            </label>
            <label htmlFor="sellPrice">
                <p>sell price</p>
                <input type="text" name="sellPrice" placeholder="sellPrice" onChange={handleInput} value={input.sellPrice} />
            </label>
            <label htmlFor="systemQuant">
                <p>system quant</p>
                <input type="text" name="systemQuant" placeholder="systemQuant" onChange={handleInput} value={input.systemQuant} />
            </label>
        </div>
    )
}