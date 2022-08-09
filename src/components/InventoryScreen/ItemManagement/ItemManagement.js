import { useEffect, useState } from "react"
import styles from '../InventoryScreen.module.css'

let color = "good"
export const ItemManagement = ({ item, handleDiff, calc, updateInput }) => {
    const [input, setInput] = useState(item)
    const [currentQuant, setCurrentQuant] = useState(0)
    const [color, setColor] = useState("good")

    const difference = currentQuant - Number(item.SystemQuantity);
    const differencePerc = difference / Number(item.SystemQuantity) * 100;
    const differenceAmount = difference * Number(item.RetailPrice);

    useEffect(() => {
        handleDiff(item.ProductName, differenceAmount)
        if (differencePerc < 0 && differencePerc > -10 && differencePerc !== 0) {
            setColor("small")
        } else if (differencePerc <= -10 && differencePerc > -20 && differencePerc !== 0) {
            setColor("medium")
        } else if (differencePerc <= -20 && differencePerc !== 0) {
            setColor("high")
        } else if (differencePerc >= 0 && differencePerc < 10) {
            setColor("good")
        } else {
            setColor("Vgood")
        }

    }, [differenceAmount])

    function handleInput(e) {
        let value = e.target.value;
        let name = input.ProductID;
        updateInput(name, value)
        setCurrentQuant(value)
        setInput(state => ({
            ...state,
            [name]: currentQuant
        }))
        console.log(input);
        console.log(difference);
        console.log(differencePerc);
        console.log(differenceAmount);
    }

    return (
        <div className={styles.item}>
            <label htmlFor="productCode">
                <p>Product code</p>
                <p>{input.ProductCode} </p>
            </label>
            <label htmlFor="product">
                <p>Product</p>
                <p>{input.ProductName}</p>
            </label>
            <label htmlFor="id">
                <p>Product ID</p>
                <p>{input.ProductID}</p>
            </label>
            <label htmlFor="retailPrice">
                <p>Retail price</p>
                <p>{input.RetailPrice}</p>
            </label>
            <label htmlFor="sellPrice">
                <p>Sell price</p>
                <p>{input.SellPrice}</p>
            </label>
            <label htmlFor="systemQuant">
                <p>System quant</p>
                <p>{input.SystemQuantity}</p>
            </label>
            <label htmlFor="currentQuant">
                <p>Current quant</p>
                <input type="text" name="currentQuant" placeholder="currentQuant" onBlur={calc} onChange={handleInput} value={currentQuant} />
            </label>
            <label htmlFor="difference">
                <p>Difference</p>
                <p className={styles[color]}>{difference}</p>
            </label>
            <label htmlFor="difference">
                <p>Difference amount</p>
                <p className={styles[color]}>{differenceAmount.toFixed(2)}</p>
            </label>
            <label htmlFor="difference">
                <p>Difference perc</p>
                <p className={styles[color]}>{differencePerc.toFixed(2)} %</p>
            </label>
        </div>
    )
}



{/* <div className={styles.item}>
<label htmlFor="productCode">
    <p>Product code</p>
    <input type="text" name="productCode" className={styles.restricted} placeholder="productCode" value={item.productCode} />
</label>
<label htmlFor="product">
    <p>product</p>
    <input type="text" name="product" className={styles.restricted} placeholder="product" value={item.productName} />
</label>
<label htmlFor="id">
    <p>product number</p>
    <input type="text" name="id" className={styles.restricted} placeholder="id" value={item.id} />
</label>
<label htmlFor="retailPrice">
    <p>retail price</p>
    <input type="text" name="retailPrice" className={styles.restricted} placeholder="retailPrice" value={item.retailPrice} />
</label>
<label htmlFor="sellPrice">
    <p>sell price</p>
    <input type="text" name="sellPrice" className={styles.restricted} placeholder="sellPrice" value={item.sellPrice} />
</label>
<label htmlFor="systemQuant">
    <p>system quant</p>
    <input type="text" name="systemQuant" className={styles.restricted} placeholder="systemQuant" value={item.systemQuant} />
</label>
<label htmlFor="currentQuant">
    <p>system quant</p>
    <input type="text" name="currentQuant" placeholder="currentQuant" onChange={handleInput} value={input.currentQuant} />
</label>
<label htmlFor="difference">
    <p>system quant</p>
    <p>{difference.toFixed(2)}</p>
</label>
</div> */}