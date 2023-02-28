import React from 'react';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';

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

const AddEngineForm = () => {
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

  /***
   * Other functions for the form logic
   */
  const handleSubmit = () => {

  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <label htmlFor='name'>Name</label>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <TextField id='name' name='name' fullWidth variant='standard' />
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
              name='designer'
              variant='standard'
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
              fullWidth
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
              variant='standard'
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
              fullWidth
              select>
              {wheelsArr.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  selected={option === '4-6-2'}
                >
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
              placeholder='url'
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
              variant='standard'
              placeholder='Image URL'
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
              minRows={3}
              maxRows={6}
              aria-label='Steam engine description'
              placeholder='Please enter notes about the steam engine here'
              style={{width: '100%', padding: 14}}
            />
          </Item>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Button type='reset' variant='outlined' fullWidth size={'large'} startIcon={<ClearIcon />}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Button type='submit' variant='contained' fullWidth size={'large'} endIcon={<AddCircleIcon />}>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddEngineForm;
