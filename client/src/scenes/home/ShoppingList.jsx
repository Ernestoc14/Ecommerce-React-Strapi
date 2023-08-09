import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{ Box , Typography, Tabs, Tab}from "@mui/material"
import Item from "../../components/Item"
import { setItems } from "../../state"

const ShoppingList = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)")
    console.log("items", items)

    const handleChange = ( event, newValue ) => {
        setValue(newValue)
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        )
        const itemsJson = await items.json()
        dispatch(setItems(itemsJson.data))
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div> Shopping List </div>
    )
}

export default ShoppingList