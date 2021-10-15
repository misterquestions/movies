import { AddPhotoAlternate } from '@mui/icons-material';
import { DatePicker } from '@mui/lab';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  LinearProgress,
  TextField,
} from '@mui/material';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateMovieMutation } from '../api/generated/sdk';
import ImageUpload from './ImageUpload';

interface AddMovieFormProps {
  open: boolean;
  onClose: () => void;
}

interface AddMovieFormData {
  name: string;
  releaseDate: Date;
  rating: number;
  cover: File;
}

const AddMovieForm: React.FC<AddMovieFormProps> = (props) => {
  const { control, handleSubmit } = useForm<AddMovieFormData>();
  const [createMovieMutation, { data, loading, error }] =
    useCreateMovieMutation();

  const addMovieSubmit: SubmitHandler<AddMovieFormData> = (movieData) => {
    console.log('Sending request for movie');
    createMovieMutation({
      variables: {
        input: {
          name: movieData.name,
          releaseDate: movieData.releaseDate,
          rating: movieData.rating,
          cover: movieData.cover,
        },
      },
      onCompleted: (data) => {
        // Todo: Add movie to list from global state
        setTimeout(() => {
          if (props.open) props.onClose();
        }, 2500);
      },
      onError: (error) => console.log(error),
    });
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <form onSubmit={handleSubmit(addMovieSubmit)}>
        <DialogTitle>Add Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please complete the form below to add a new movie, ensure all
            details are correct before submitting.
          </DialogContentText>

          <Grid container spacing={2} marginY={1}>
            <Grid item xs={12}>
              {data && (
                <Alert severity="success">
                  Se ha agregado la película exitosamente
                </Alert>
              )}
              {error && (
                <Alert severity="error">
                  Ha ocurrido un fallo al ejecutar la operación:
                </Alert>
              )}

              {loading && <LinearProgress color="primary" />}
            </Grid>

            <Grid item xs={12} md={4}>
              <Controller
                name="cover"
                control={control}
                render={({ field }) => <ImageUpload inputProps={field} />}
              />
            </Grid>
            <Grid item container xs={12} md={8} spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      inputProps={{ ...field }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="releaseDate"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      views={['year', 'month']}
                      label="Year and Month"
                      renderInput={(params) => (
                        <TextField {...params} helperText={null} fullWidth />
                      )}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="rating"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      inputProps={{ ...field }}
                      fullWidth
                      label="Rating (0-10)"
                      variant="outlined"
                      type="number"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="error">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMovieForm;
