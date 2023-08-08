import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material"
import AddIcon from "@mui/material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { shades } from "../theme"
import { addToCart } from "../state"

const Item = ({ item, width }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const {
        palette: { neutral },
    } = useTheme();

    const { category, price, name, images } = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url },
                }
            }
        }
    } = image;

    return (
        <Box width={width}>
            <Box 
                position="relative" 
                onMouseOver={() => setIsHovered(true)} 
                onMouseOut={() => setIsHovered(false)}
            >
                <img 
                    alt={item.name}
                    width="300pz"
                    height="400px"
                    src={`http://localhost:1337${url}`}
                    onClick={() => navigate(`/item/${item.id}`)}
                    style={{ cursor: 'pointer' }}
                />
                <Box
                    display={isHovered ? "blocked" : "none"}
                    position="absolute"
                    bottom="10%"
                    left="0"
                    width="100%"
                    padding="0 5%"
                >
                    <Box display="flex" justifyContent="space-between">
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            backgroundColor={ shades.neutral[100]}
                            borderRadius="3px"
                        >

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Item