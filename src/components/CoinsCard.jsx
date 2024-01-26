import React from 'react';
import { VStack, Image, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinsCard = ({ id, name, img, symbol, price, currencySymbol="₹" }) => (
    <Link to={`/coin/${id}`} >
        <VStack w={52} shadow={"lg"} p={8} borderRadius={"lg"} m={4}
        transition={"all 0.5s"} 
        css={{
            "&:hover": {
                transform: "scale(1.12)"
            }

        }}>
            <Image 
            src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Coins"} ></Image>
            <Heading size={"md"} noOfLines={1} >{symbol}</Heading>
            <Text noOfLines={1} >{name}</Text>
            <Text noOfLines={1} >{ price? `${currencySymbol}${price}` : "NA" }</Text>
        </VStack>
    </Link>
)


export default CoinsCard;