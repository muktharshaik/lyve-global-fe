import { Restaurant } from 'types/dataTypes';
import axios from 'axios';
import { Box, Button, FormLabel, TextField, styled } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useState } from 'react';
import toast from 'react-hot-toast';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export function RestaurantDetailsForm(props: Restaurant | any) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [deliveryTime, setDeliveryTime] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [costRange, setCostRange] = useState<number>(0);
  const formData = new FormData();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      image,
      deliveryTime,
      rating,
      costRange,
    };
    axios
      .post('http://localhost:3000/api/restaurants/add', data)
      .then((res) => {
        if (res.status === 200) toast.success('Restaurant added successfully');
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    formData.append('image', file);
    axios
      .post(
        `https://api.imgbb.com/1/upload?expiration=30000&key=ad0a5bfe411507bb39357fae4868299b`,
        formData
      )
      .then((res) => {
        toast.success('Image uploaded successfully');
        setImage(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Image upload failed');
      });
  };

  return (
    <div>
      <h3 className="text-xl text-gray-700 mb-4">Restaurant Details</h3>
      <Box component={'form'} autoComplete="off">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          size="small"
          required
          className="w-[100%] rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-col mt-4">
          <FormLabel className="mt-2">Upload logo</FormLabel>
          <Button
            component="label"
            variant="contained"
            size="small"
            startIcon={<CloudUpload />}
            className="my-2"
            onChange={handleFileUpload}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          {image && <FormLabel>{image}</FormLabel>}
        </div>
        <TextField
          id="deliveryTime"
          label="Delivery Time"
          variant="outlined"
          size="small"
          className="w-[100%] rounded-md mt-4"
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
        <TextField
          id="rating"
          label="Rating"
          variant="outlined"
          inputProps={{ type: 'number', min: 0, max: 5 }}
          size="small"
          className="w-[100%] rounded-md mt-4"
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <TextField
          id="constRange"
          label="Cost Range"
          variant="outlined"
          inputProps={{ type: 'number', min: 0, max: 5 }}
          size="small"
          className="w-[100%] rounded-md mt-4"
          onChange={(e) => setCostRange(Number(e.target.value))}
        />
        <Button
          onClick={handleSubmit}
          variant="outlined"
          className="mt-4 float-right"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default RestaurantDetailsForm;
