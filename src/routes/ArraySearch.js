import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'


const ArraySearch = () => {
    const [size, setSize] = useState(0)
    const [listItems, setListItems] = useState([])
    const [searchNumber, setSearchNumber] = useState(0)
    const [algorithm, setAlgorithm] = useState('Linear Search')
    const [domHelper, setDomHelper] = useState(0)

    const startSearch = (e) => {
        e.preventDefault()
    }

    const createArray = (e) => {
        e.preventDefault()
        let a = []
        for (let i = 0; i < size; i++) {
            a.push(i)
        }
        setListItems(a)
    }

    const search = () => {
        for (let i = 0; i < listItems.length; i++) {
            var current = document.getElementById(i)
            current.classList.remove('current')
        }

        if (algorithm === 'Linear Search') {
            linearSearch()
        }
        else if (algorithm === 'Binary Search') alert('Not implemented')
        else alert('Pick an algorithm')
    }

    const linearSearch = async () => {
        for (let i = 0; i < listItems.length; i++) {
            var current = document.getElementById(i)
            if (i >= 1) {
                var previous = document.getElementById(i - 1)
                previous.classList.remove('current')
            }
            current.classList.add('current')
            if (listItems[i] == searchNumber) {
                // alert('Found')
                return
            }
            let updateHelper = domHelper + 1
            setDomHelper(updateHelper)
            console.log(domHelper)
        }
    }

    return (
        <div>
            <h1>Search algorithms</h1>
            <form onSubmit={startSearch}>
                <select onChange={(e) => setAlgorithm(e.target.value)}>
                    <option value='Linear Search'>
                        Linear Search
                    </option>
                    <option value='Binary Search'>
                        Binary Search
                    </option>
                </select>
                <br />
                <label>Items: </label>
                <input min="0" max="1000" value={size} type="number" name='items' onChange={(e) => setSize(e.target.value)} />
                <button onClick={createArray}>Create Array</button>
                <br />
                <label>Number to find: </label>
                <input value={searchNumber} type="number" onChange={(e) => setSearchNumber(e.target.value)} />

                <button onClick={search}>Search!</button>
                {/* <button onClick={randomizeArray}>Randomize Array</button> */}
            </form>
            <div className='itemContainer' helper={domHelper}>
                {listItems.map(item =>
                    <div key={item} className='item' id={item}>{item}</div>
                )}
            </div>


        </div>
    )
}

export default ArraySearch