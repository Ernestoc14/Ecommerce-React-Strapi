import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import Item from "../../components/Item";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:3001/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:3001/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }


    useEffect(() => {
      getItem();
      getItems();
    }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Box
    width="80%" m="80px auto">
    <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES*/}
        <Box flex="1 1 40%" mb="40px">
            <img
                alt={item?.name}
                width="100%"
                height="100%"
                src={`http://localhost:3001${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                style={{ objectFit: "contain" }}
            />
        </Box>
        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
            <Box>Home / Item</Box>
            <Box>Prev Next</Box>
        </Box>

        <Box m="65px 0 25px 0">
            <Typography variant="h3" >{items?.attributes?.names}</Typography>
            <Typography>{items?.attributes?.price}</Typography>
            <Typography sx={{ mt: '20px'}}>
                {items?.attributes?.longDescription}
            </Typography>
        </Box>
    </Box>
  </Box>
};
export default ItemDetails;
