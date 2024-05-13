import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Stack,
  Box
} from "@chakra-ui/react";
import "../styles/postservices.css"
function PostYourService() {
  const url = "https://periyar-variable-032-nfcl.onrender.com/request/newrequest"



  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [virtual, setVirtual] = useState('yes');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
     userName: username,
     categories: category,
     description: description,
     image: image,
     willingToPay: price,
     virtuallyOrNot: virtual
    };
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        // Clear the form fields after successful submission
        setUsername('');
        setCategory('');
        setDescription('');
        setImage('');
        setPrice('');
        setVirtual('yes');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Box className='postYourservices' style={{ backgroundColor: "#6a9ac4" }} display="flex" justifyContent="center" alignItems="center" h="90vh" mt={0}>
      <Box style={{ backgroundColor: "white" }} p={8} shadow="md" borderWidth="1px" borderRadius="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing={0}>
            <FormControl>
              Username
              <Input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl>
              Category
              <Select
                id="category"
                placeholder="Select a category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="yoga">Yoga</option>
                <option value="travel">Travel</option>
                <option value="skincare">Skincare</option>
                <option value="art">Art</option>
                <option value="catering">Catering</option>
                <option value="childcare">Childcare</option>
                <option value="gaming">Gaming</option>
                <option value="gardening">Gardening</option>
                <option value="hairstyle">Hairstyle</option>
                <option value="makeup">Makeup</option>
                <option value="pregnancy">Pregnancy</option>
                <option value="skin care">Skin Care</option>
              </Select>
            </FormControl>

            <FormControl>
              Description
              <Textarea
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl>
              Image
              <Input
                type="text"
                id="image"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </FormControl>

            <FormControl>
              Willing to pay
              <Input
                type="number"
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>

            <FormControl>
              Virtual
              <Select
                id="virtual"
                value={virtual}
                onChange={(e) => setVirtual(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default PostYourService;
