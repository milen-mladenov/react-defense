import { useEffect, useState } from "react"
import styles from '../InventoryScreen.module.css'

let color = "good"
export const ItemManagement = ({ item, handleDiff, calc }) => {
    const [input, setInput] = useState(item)
    const [color, setColor] = useState("good")

    const difference = (Number(input.currentQuant) - Number(item.systemQuant));
    const differencePerc = difference / Number(item.systemQuant) * 100;
    const differenceAmount = difference * Number(item.retailPrice);
    
    useEffect(() => {
        handleDiff(item.id,differenceAmount)
        if(differencePerc < 0 && differencePerc > -10 && differencePerc !== 0) {
            setColor("small")
        } else if(differencePerc <= -10 && differencePerc > -20 && differencePerc !== 0) {
            setColor("medium")
        } else if(differencePerc <= -20  && differencePerc !== 0) {
            setColor("high")
        } else if(differencePerc >= 0 && differencePerc < 10) {
            setColor("good")
        } else {
            setColor("Vgood")
        }
    },[differenceAmount])

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
                <p>{input.productCode} </p>
            </label>
            <label htmlFor="product">
                <p>product</p>
                <p>{input.productName}</p>
            </label>
            <label htmlFor="id">
                <p>product number</p>
                <p>{input.id}</p>
            </label>
            <label htmlFor="retailPrice">
                <p>retail price</p>
                <p>{input.retailPrice}</p>
            </label>
            <label htmlFor="sellPrice">
                <p>sell price</p>
                <p>{input.sellPrice}</p>
            </label>
            <label htmlFor="systemQuant">
                <p>system quant</p>
                <p>{input.systemQuant}</p>
            </label>
            <label htmlFor="currentQuant">
                <p>system quant</p>
                <input type="text" name="currentQuant" placeholder="currentQuant" onBlur={calc} onChange={handleInput} value={input.currentQuant} />
            </label>
            <label htmlFor="difference">
                <p>difference</p>
                <p className={styles[color]}>{difference}</p>
            </label>
            <label  htmlFor="difference">
                <p>difference amount</p>
                <p className={styles[color]}>{differenceAmount.toFixed(2)}</p>
            </label>
            <label htmlFor="difference">
                <p>difference perc</p>
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