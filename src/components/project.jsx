import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Project = ({ img, title }) => {
    return (
          <ImageListItem key={img}>
            <img
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
            />
          </ImageListItem>
    )
}

export default Project;


