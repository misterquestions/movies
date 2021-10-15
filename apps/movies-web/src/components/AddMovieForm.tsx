import { AddPhotoAlternate } from '@mui/icons-material';
import { DatePicker } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import ImageUpload from './ImageUpload';

interface AddMovieFormProps {
  open: boolean;
  onClose: () => void;
}

const AddMovieForm: React.FC<AddMovieFormProps> = (props) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Add Movie</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please complete the form below to add a new movie, ensure all details
          are correct before submitting.
        </DialogContentText>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2} marginY={2}>
            <Grid item xs={12} md={4}>
              <ImageUpload />
            </Grid>
            <Grid item container xs={12} md={8} spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  views={['year', 'month']}
                  label="Year and Month"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Rating (0-10)"
                  variant="outlined"
                  type="number"
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="error">
          Cancel
        </Button>
        <Button onClick={props.onClose} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMovieForm;
