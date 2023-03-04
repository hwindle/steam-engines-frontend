import React, { useState } from 'react';
import { useFormik } from 'formik';
import engineSchema from '../../formSchemas/engineSchema';
import axios from 'axios';
// material UI imports
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

/***
 * Styled component and other parts to style the form and enter
 * options into the select boxes.
 */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const formStyles = {
  width: '90%',
  margin: '1rem auto',
  padding: 30,
  border: '2px solid maroon',
};

const decadesArr = [
  '1800',
  '1810',
  '1820',
  '1830',
  '1840',
  '1850',
  '1860',
  '1870',
  '1880',
  '1890',
  '1900',
  '1910',
  '1920',
  '1930',
  '1940',
  '1950',
];

const wheelsArr = [
  '0-2-2',
  '2-2-2',
  '0-4-0',
  '2-4-0',
  '4-4-0',
  '2-4-2',
  '4-4-2',
  '0-6-0',
  '2-6-0',
  '4-6-0',
  '4-6-2',
  '2-8-0',
  '4-8-0',
  '2-8-2',
  '4-8-2',
  '4-8-4',
  '2-10-2',
  '4-10-2',
];

const AddUpdateEngineForm = ({ oneEngine, update }) => {
  // flash message at bottom
  const [successMessage, setSuccessMessage] = useState('');
  /***
   * Other functions for the form logic
   */
  const onSubmit = async (values, actions) => {
    // add an engine
    if (!update) {
      try {
        const response = await axios.post(
          'http://localhost:3050/addengine',
          values
        );
        // console.dir(response.data);
        setSuccessMessage('Steam engine added!');
      } catch (err) {
        console.error(`${err} from axios addEngine post`);
      }
      actions.resetForm();
    } else {
      try {
        const updateResponse = await axios.put(
          `http://localhost:3050/updateEngine/${oneEngine.name}`,
          values
        );
        console.dir(updateResponse.data);
        setSuccessMessage('Steam locomotive updated!');
      } catch (err) {
        console.error(`${err} from axios updateEngine put`);
      }
      actions.resetForm();
    }
  };

  // gets the values from the oneEngine prop obj if this is an update
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: oneEngine?.name || '',
      designer: oneEngine?.designer || '',
      railwayCompany: oneEngine?.railwayCompany || '',
      startYear: oneEngine?.startYear || '',
      endYear: oneEngine?.endYear || '',
      decade: oneEngine?.decade || '',
      wheelbase: oneEngine?.wheelbase || '',
      wikiUrl: oneEngine?.wikiUrl || '',
      imageUrl: oneEngine?.imageUrl || '',
      description: oneEngine?.description || '',
    },
    validationSchema: engineSchema,
    onSubmit,
  });

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <label htmlFor='name'>Name</label>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <TextField
              id='name'
              name='name'
              fullWidth
              placeholder='Mallard'
              required
              variant='standard'
              error={errors?.name}
              helperText={errors?.name}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.name}
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <label htmlFor='designer'>Designer</label>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Item>
            <TextField
              id='designer'
              fullWidth
              required
              placeholder='Sir Nigel Gresley'
              name='designer'
              variant='standard'
              error={errors?.designer}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.designer}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={3} md={2}>
          <label htmlFor='railwayCompany'>Railway Company</label>
        </Grid>
        <Grid item xs={12} sm={9} md={4}>
          <Item>
            <TextField
              id='railwayCompany'
              name='railwayCompany'
              variant='standard'
              placeholder='LNER'
              fullWidth
              error={errors?.railwayCompany}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.railwayCompany}
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={2}>
          <label htmlFor='startYear'>Year created</label>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='startYear'
              name='startYear'
              fullWidth
              placeholder='1938'
              helperText={errors?.startYear}
              required
              variant='standard'
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              error={errors?.startYear}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.startYear}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={2}>
          <label htmlFor='endYear'>Year scrapped</label>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='endYear'
              name='endYear'
              variant='standard'
              fullWidth
              placeholder='1963'
              helperText={errors?.endYear}
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              error={errors?.endYear}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.endYear}
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <label htmlFor='decade'>Decade created</label>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Item>
            <TextField
              id='decade'
              name='decade'
              fullWidth
              required
              error={errors?.decade}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.decade}
              variant='standard'
              select>
              {decadesArr.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  selected={option === '1930'}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <label htmlFor='wheelbase'>Wheels</label>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Item>
            <TextField
              id='wheelbase'
              name='wheelbase'
              variant='standard'
              error={errors?.wheelbase}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.wheelbase}
              fullWidth
              select>
              {wheelsArr.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  selected={option === '4-6-2'}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Item>
        </Grid>

        <Grid item xs={12} sm={2}>
          <label htmlFor='wikiUrl'>Website</label>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='wikiUrl'
              name='wikiUrl'
              fullWidth
              variant='standard'
              placeholder='URL'
              error={errors?.wikiUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.wikiUrl}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={2}>
          <label htmlFor='imageUrl'>Image</label>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='imageUrl'
              name='imageUrl'
              fullWidth
              required
              helperText={errors?.imageUrl}
              variant='standard'
              placeholder='Image URL'
              error={errors?.imageUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.imageUrl}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor='description'>Description</label>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TextareaAutosize
              id='description'
              name='description'
              error={errors?.description}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.description}
              minRows={3}
              maxRows={6}
              aria-label='Steam engine description'
              placeholder='Please enter notes about the steam engine here'
              style={{ width: '100%', padding: 14 }}
            />
          </Item>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Button
            type='reset'
            variant='outlined'
            fullWidth
            size={'large'}
            startIcon={<ClearIcon />}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={6} sm={8}>
          {!update ? (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              size={'large'}
              endIcon={<AddCircleIcon />}>
              Add
            </Button>
          ) : (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              size={'large'}
              endIcon={<PublishedWithChangesIcon />}>
              Update
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          {successMessage ? 
          <p
            style={{
              width: '40ch',
              margin: '0.3rem auto',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid green',
              padding: '0.8rem',
              fontSize: '1.2rem',
              textAlign: 'center',
              borderRadius: 5,
            }}>
            {successMessage}
          </p>
          : '' }
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUpdateEngineForm;
