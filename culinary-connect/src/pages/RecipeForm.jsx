import React, {useState} from 'react';
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
import { useForm } from 'react-hook-form';
import "../RecipeFormStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Correct import
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 

const RecipeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    if (!data || Object.keys(data).length === 0) {
      console.error("No data provided");
      return;
    }
    
    console.log("Recipe data:", data);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file); 
  };

  return (
    <div className='body'>
    <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
      <Typography className="form-header" variant="h4">Share Your Recipe</Typography>
      <Grid className='input-grid'container spacing={3}>
        <Grid className='form-input' item xs={12} spacing={2}>
          <TextField
            className='text-field'
            {...register('name', { required: "Recipe Name is required" })}
            label="Recipe Name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        
        <Grid className='form-input' item xs={12} spacing={2}>
          <TextField
          className='text-field'
            {...register('ingredients', { required: "Ingredients are required" })}
            label="Ingredients"
            multiline
            rows={4}
            fullWidth
            error={!!errors.ingredients}
            helperText={errors.ingredients?.message}
          />
        </Grid>

        <Grid className='form-input' item xs={12} spacing={2}>
          <TextField
          className='text-field'
            {...register('preparationSteps', { required: "Preparation steps are required" })}
            label="Preparation Steps"
            multiline
            rows={4}
            fullWidth
            error={!!errors.preparationSteps}
            helperText={errors.preparationSteps?.message}
          />
        </Grid>
        
        <Grid className='form-input' item xs={6}>
          <TextField
          className='text-field'
            {...register('cookingTime', { required: "Cooking time is required" })}
            label="Cooking Time (in minutes)"
            type="number"
            fullWidth
            error={!!errors.cookingTime}
            helperText={errors.cookingTime?.message}
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

        <Grid className='form-input' item xs={12} spacing={2}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              {...register('category', { required: "Category is required" })}
              error={!!errors.category}
              defaultValue=""
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
              {...register("photo")}
              onChange={onFileChange} // Update state when file changes
            />
            <Button
              className="upload-button"
              onClick={() => document.getElementById("photo").click()}
            >
              {selectedFile ? `Selected: ${selectedFile.name}` : ''}
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
            Share Recipe
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};

export default RecipeForm;
