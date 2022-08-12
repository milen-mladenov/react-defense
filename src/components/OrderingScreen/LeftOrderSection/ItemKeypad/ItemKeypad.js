import styles from './ItemKeypad.module.css'


export const ItemKeypad = ({newItemHandler}) => {

    function handleClick(e){
        newItemHandler(e.target.value)
       
    }

    return (
        <div id="order_section_keypad" className={styles.order_section_keypad}>
            <button onClick={handleClick} className={styles.keypad_button} id="key_1" value="1">1</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_2" value="2">2</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_3" value="3">3</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_4" value="4">4</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_5" value="5">5</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_6" value="6">6</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_7" value="7">7</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_8" value="8">8</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_9" value="9">9</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_0" value="0">0</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_enter" value="enter">ENTER</button>
            <button onClick={handleClick} className={styles.keypad_button} id="key_return" value="return">RETURN</button>
        </div>
    )
}