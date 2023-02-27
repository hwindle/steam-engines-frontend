import React from 'react';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import { Item } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const AddEngineForm = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <label htmlFor='name'>Name</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <TextField id='name' name='name' label='Name' variant='standard' />
          </Item>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Item>
            <label htmlFor='designer'>Designer</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Item>
            <TextField
              id='designer'
              name='designer'
              label='Designer'
              variant='standard'
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <label htmlFor='railwayCompany'>Railway Company</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <TextField
              id='railwayCompany'
              name='railwayCompany'
              label=''
              variant='standard'
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Item>
            <label htmlFor='startYear'>Year created</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='startYear'
              name='startYear'
              label=''
              variant='standard'
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Item>
            <label htmlFor='endYear'>Year scrapped</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='endYear'
              name='endYear'
              label=''
              variant='standard'
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Item>
            <label htmlFor='decade'>Decade created</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Item>
            <TextField id='decade' name='decade' label='' variant='standard' />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <label htmlFor='wheelbase'>Wheels</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <TextField
              id='wheelbase'
              name='wheelbase'
              label='4-6-2'
              variant='standard'
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Item>
            <label htmlFor='wikiUrl'>Website</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='wikiUrl'
              name='wikiUrl'
              label=''
              variant='standard'
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Item>
            <label htmlFor='imageUrl'>Image</label>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <TextField
              id='imageUrl'
              name='imageUrl'
              label=''
              variant='standard'
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <label htmlFor='description'>Description</label>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <TextareaAutosize
              id='description'
              name='description'
              minRows={3}
              maxRows={6}
              aria-label='Steam engine description'
              placeholder=''
              defaultValue='Please enter notes about the steam engine in here.'
            />
          </Item>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Item>
            <Button type='reset' variant='contained' startIcon={<ClearIcon />}>
              Clear
            </Button>
          </Item>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Item>
            <Button
              type='submit'
              variant='contained'
              endIcon={<AddCircleIcon />}>
              Add
            </Button>
          </Item>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddEngineForm;
