import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material"
import Item from "../../components/Item"
import { setItems } from "../../state"

const ShoppingList = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)")
    console.log("items", items)

    const handleChange = (event, newValue) => {
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

    const topRatedItems = items.filter((item) => item.attributes.category === "top-rated")

    const newArrivalsItems = items.filter((item) => item.attributes.category === "new-arrivals")

    const bestSellersItems = items.filter((item) => item.attributes.category === "best-sellers")

    return (
        <Box width="80%" margin="80px auto">
            <Typography variant="h3" textAlign="center">
                Our Featured <b>Products</b>
            </Typography>
            <Tabs
                textColor='primary'
                indicatorColor='primary'
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
                sx={{
                    m:"25px",
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    }
                }}
            >
                <Tab label="All" value="all" />
                <Tab label="Top Rated" value="top-rated" />
                <Tab label="New Arrivals" value="new-arrivals" />
                <Tab label="Best Sellers" value="best-sellers" />
            </Tabs>
        </Box>
    )
}

export default ShoppingList