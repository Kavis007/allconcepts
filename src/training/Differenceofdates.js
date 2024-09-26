import React, { useState } from 'react'

function Differenceofdates() {
    let [a, setA] = useState()
    let [b, setB] = useState()
    let [diff, setDiff] = useState()
    let [sum, setSum] = useState()
    let [temp, setTemp] = useState(0)
    function Diffdo() {
        let ob1 = new Date(a)
        let ob2 = new Date(b)
        let d1 = ob1.getTime()
        let d2 = ob2.getTime()
        // let mon1 = ob1.getMonth()
        // let mon2 = ob2.getMonth()
    //     let store=0
    //     if (mon1 === mon2) {
    //         setDiff(Math.abs(d1 - d2))
    //     }
    //     else{
    //     if(mon1%2===0 || mon1===7)
    //     {
    //         store=store+(Math.abs(31-d1))
    //     }
    //     else
    //     {
    //         store=store+(Math.abs(30-d1))
    //     }
    //     if(mon2%2===0 || mon1===7)
    //     {
    //         store=store+(Math.abs(31-d2))
    //     }
    //     else
    //     {
    //         store=store+(Math.abs(30-d2))
    //     }
    // }
        
        
    //     if ((mon1 < mon2) && (Math.abs(mon1-mon2))>1) {
    //         for (let i = mon1 + 1; i < mon2; i++) {
    //             if (i % 2 === 0 && i != 7) {
    //                 store=store+31
    //             }
    //             else if (i % 2 != 0 && i != 7) {
    //                 store=store+30
    //             }
    //             else if (i === 7) {
    //                 store=store+31
    //             }
    //         }
    //     }
    //     else if ((mon2 < mon1) && (Math.abs(mon1-mon2))>1) {
    //         for (let i = mon2 + 1; i < mon1; i++) {
    //             if (i % 2 === 0 && i != 7) {
    //                 store=store+31
    //             }
    //             else if (i % 2 != 0 && i != 7) {
    //                 store=store+30
    //             }
    //             else if (i === 7) {
    //                 store=store+31
    //             }
    //         }
    //     }
    //     else if (((Math.abs(mon1 - mon2)) === 1) && ((Math.abs(mon2 - mon1)) === 1)) {
    //         if (mon1 % 2 === 0 && mon1 != 7) {
    //             store=store+ (Math.abs(31 - d1))
    //         }
    //         else if (mon1 % 2 != 0 && mon1 != 7) {
    //             store=store+ (Math.abs(30 - d1))
    //         }
    //         else if (mon1 === 7) {
    //             store=store+ (Math.abs(31 - d1))
    //         }
    //         if (mon2 % 2 === 0 && mon2 != 7) {
    //             store=store+ (Math.abs(31 - d2))
    //         }
    //         else if (mon2 % 2 != 0 && mon2 != 7) {
    //             store=store+ (Math.abs(30 - d2))
    //         }
    //         else if (mon2 === 7) {
    //             store=store+ (Math.abs(31 - d2))
    //         }
    //         setSum(store)
    //     }

    let difference = d1- d2
    console.log(difference)

    let perday = 24*60*60*1000

    console.log(difference/perday)




    }
    return (
        <div>
            <input type='datetime-local' onChange={(e) => { setA(e.target.value) }} />
            <input type='datetime-local' onChange={(e) => { setB(e.target.value) }} />
            <button onClick={Diffdo}>Click</button>
            <h3>{`The difference between the two dates is ${sum}`}</h3>
            <h3>{diff}</h3>
        </div>
    )
}

export default Differenceofdates
