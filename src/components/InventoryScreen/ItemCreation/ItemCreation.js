import { useState } from 'react'
import styles from '../InventoryScreen.module.css'


export const ItemCreation = ({ item, handler }) => {
    const [input, setInput] = useState(item);

    function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        if (name === "Alcohol") {
            value = e.target.checked
        }
        setInput(old => ({
            ...old,
            [name]: value
        }))

        if (input.ProductID !== "" &&
            input.ProductName !== "" &&
            input.ProductCode !== "" &&
            input.SellPrice !== "" &&
            input.RetailPrice !== "" &&
            input.SystemQuant !== "") {
            handler(input)
        }
    }

    function test(e) {
        e.preventDefault()
        console.log(input);
    }
    return (
        <div className={styles.item}>
            <button onClick={test}>test</button>
            <label htmlFor="ProductCode">
                <p>Product code</p>
                <input type="text" name="ProductCode" placeholder="ProductCode" onChange={handleInput} value={input.ProductCode} />
            </label>
            <label htmlFor="ProductName">
                <p>Product</p>
                <input type="text" name="ProductName" placeholder="ProductName" onChange={handleInput} value={input.ProductName} />
            </label>
            <label htmlFor="ProductID">
                <p>Product number</p>
                <input type="text" name="ProductID" placeholder="ProductID" onChange={handleInput} value={input.ProductID} />
            </label>
            <label htmlFor="RetailPrice">
                <p>Retail price</p>
                <input type="text" name="RetailPrice" placeholder="RetailPrice" onChange={handleInput} value={input.RetailPrice} />
            </label>
            <label htmlFor="SellPrice">
                <p>Sell price</p>
                <input type="text" name="SellPrice" placeholder="SellPrice" onChange={handleInput} value={input.SellPrice} />
            </label>
            <label htmlFor="SystemQuant">
                <p>System quant</p>
                <input type="text" name="SystemQuant" placeholder="SystemQuant" onChange={handleInput} value={input.SystemQuant} />
            </label>
            <label htmlFor="Alcohol">
                <p>Alcohol</p>
                <input type="checkbox" name="Alcohol" onChange={handleInput} value={input.Alcohol} />
            </label>
        </div>
    )
}