import { AddPhotoAlternate } from '@mui/icons-material';
import { Grid, Input, Paper, Typography } from '@mui/material';
import React from 'react';

interface ImageUploadProps {
  onChange?: (file: SelectedFile | SelectedFile[] | null) => void;
  multiple?: boolean;
}

interface SelectedFile {
  fileName: string;
  fileUrl: string;
}

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const [currentFile, setCurrentFile] = React.useState<SelectedFile | null>(
    null
  );

  const handleFileChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      const files = inputElement.files;

      if (files && files.length > 0) {
        console.log({ files });

        const file = files[0];
        const fileUrl = URL.createObjectURL(file);
        const fileName = file.name;
        const fileData: SelectedFile = {
          fileName,
          fileUrl,
        };

        props.onChange && props.onChange(fileData);
        setCurrentFile(fileData);
      }
    }
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      elevation={3}
    >
      <label
        htmlFor="cover-photo"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '0.5em',
          cursor: 'pointer',
        }}
      >
        {currentFile ? (
          <div style={{ width: '100%' }}>
            <img
              alt="cover"
              src={currentFile.fileUrl}
              style={{ width: '100%' }}
            />
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {currentFile.fileName}
            </Typography>
          </div>
        ) : (
          <AddPhotoAlternate
            fontSize="large"
            opacity={0.5}
            sx={{ marginY: '1.5em' }}
          />
        )}
      </label>
      <Input
        id="cover-photo"
        type="file"
        onChange={handleFileChange}
        sx={{ display: 'none' }}
      />
    </Paper>
  );
};

export default ImageUpload;
