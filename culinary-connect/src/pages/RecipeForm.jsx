import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import "../RecipeFormStyle.css";
import { createRecipe } from '../services/ApiServices';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';

const RecipeForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients'
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    setLoading(true);

    // Create FormData 
    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    data.ingredients.forEach((ingredient, index) => {
      formDataToSend.append(`ingredients[${index}]`, ingredient.name);
    });
    formDataToSend.append("instructions", data.instructions);
    formDataToSend.append("time", data.time);
    formDataToSend.append("servings", data.servings);
    formDataToSend.append("category", data.category);
    formDataToSend.append("file", selectedFile);

    try {
      const response = await createRecipe(formDataToSend);
      setLoading(false);
      setSuccess("Recipe created!");
      navigate('/homepage2');
    } catch (error) {
      console.error("Error creating Recipe:", error);
      setError("Error creating Recipe. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="appBodyHP2">
    <TopMenu></TopMenu>
    <SideMenu></SideMenu>
    <div className='next2SM body'>
      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <Typography className="form-header" variant="h4">Share Your Recipe</Typography>
        <Grid className='input-grid' container spacing={3}>
          <Grid className='form-input' item xs={12}>
            <TextField
              className='text-field'
              {...register('name', { required: "Recipe Name is required" })}
              label="Recipe Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          
          {fields.map((field, index) => (
            <Grid className='form-input' item xs={12} key={field.id}>
              <TextField
                className='text-field'
                {...register(`ingredients.${index}.name`, { required: "Ingredient is required" })}
                label={`Ingredient ${index + 1}`}
                fullWidth
                error={!!errors.ingredients?.[index]?.name}
                helperText={errors.ingredients?.[index]?.name?.message}
              />
              <Button onClick={() => remove(index)}>Remove</Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button onClick={() => append({ name: '' })}>Add Ingredient</Button>
          </Grid>

          <Grid className='form-input' item xs={12}>
            <TextField
              className='text-field'
              {...register('instructions', { required: "Preparation steps are required" })}
              label="Preparation Steps"
              multiline
              rows={4}
              fullWidth
              error={!!errors.instructions}
              helperText={errors.instructions?.message}
            />
          </Grid>

          <Grid className='form-input' item xs={6}>
            <TextField
              className='text-field'
              {...register('time', { required: "Cooking time is required" })}
              label="Cooking Time (in minutes)"
              type="number"
              fullWidth
              error={!!errors.time}
              helperText={errors.time?.message}
            />
          </Grid>

          <Grid className='form-input' item xs={6}>
            <TextField
              className='text-field'
              {...register('servings', { required: "Servings are required" })}
              label="Servings"
              type="number"
              fullWidth
              error={!!errors.servings}
              helperText={errors.servings?.message}
            />
          </Grid>

          <Grid className='form-input' item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                {...register('category', { required: "Category is required" })}
                defaultValue=""
                fullWidth
                error={!!errors.category}
              >
                <MenuItem value="Appetizer">Appetizer</MenuItem>
                <MenuItem value="Main Course">Main Course</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <div className="file-input-wrapper">
              <label htmlFor="photo" className="file-input-label">
                Upload Photo
              </label>
              <input
                id="photo"
                type="file"
                accept=".png, .jpg, .jpeg"
                style={{ display: 'none' }} // Hide the input
                {...register("photo", { required: "Photo is required" })}
                onChange={onFileChange} // Update state when file changes
              />
              <Button
                className="upload-button"
                onClick={() => document.getElementById("photo").click()}
              >
                {selectedFile ? `Selected: ${selectedFile.name}` : 'Choose File'}
              </Button>
            </div>

            {selectedFile && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(selectedFile)} // Generate a preview URL
                  alt="Preview"
                  className="preview-image"
                />
              </div>
            )}
            
            {errors.photo && <span className="error-message">{errors.photo.message}</span>}
          </Grid>

          <Grid className='form-input' item xs={12}>
            <Button className='submit-button' type="submit" variant="contained" color="primary">
              {loading ? 'Submitting...' : 'Share Recipe'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
    </div>
  );
};

export default RecipeForm;
