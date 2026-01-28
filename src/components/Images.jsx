import React, { useState } from "react";
import { 
  Card, 
  CardMedia, 
  Typography, 
  Box, 
  Container,
  IconButton,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
  Paper
} from "@mui/material";
import {
  ZoomIn as ZoomInIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  PhotoLibrary as GalleryIcon
} from "@mui/icons-material";

// Import your images
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";

const images = [
  { src: img1, title: "Matematika darsi", category: "Ta'lim" },
  { src: img3, title: "Dasturlash workshop", category: "Texnologiya" },
  { src: img4, title: "Ilmiy tadqiqot", category: "Fan" },
  { src: img5, title: "Robototexnika", category: "Muhandislik" },
  { src: img6, title: "Grafik dizayn", category: "San'at" },
  { src: img7, title: "Sun'iy intellekt", category: "AI" },
  { src: img8, title: "Data Science", category: "Analitika" },
  { src: img9, title: "Web dasturlash", category: "Texnologiya" },
  { src: img10, title: "Mobile development", category: "Texnologiya" },
  { src: img11, title: "Cyber security", category: "Xavfsizlik" },
  { src: img12, title: "Cloud computing", category: "Texnologiya" },
  { src: img13, title: "IoT loyihasi", category: "Internet of Things" },
  { src: img14, title: "3D modeling", category: "Dizayn" },
  { src: img15, title: "Game development", category: "O'yinlar" },
  { src: img16, title: "Machine Learning", category: "AI" },
  { src: img17, title: "Blockchain", category: "Texnologiya" },
  { src: img18, title: "AR/VR", category: "Virtual Reality" },
  { src: img19, title: "Big Data", category: "Analitika" },
  { src: img20, title: "DevOps", category: "Texnologiya" }
];

const Images = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpen = (index) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Ta'lim": "#3f51b5",
      "Texnologiya": "#2196f3",
      "Fan": "#4caf50",
      "Muhandislik": "#ff9800",
      "San'at": "#9c27b0",
      "AI": "#f44336",
      "Analitika": "#009688",
      "Xavfsizlik": "#673ab7",
      "Internet of Things": "#00bcd4",
      "Dizayn": "#e91e63",
      "O'yinlar": "#ff5722",
      "Virtual Reality": "#795548"
    };
    return colors[category] || "#607d8b";
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%)',
      py: { xs: 3, md: 5 }
    }}>
      <Container maxWidth="xl">
        {/* Simple Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 5 }
        }}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}
          >
            Galereya
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {images.length} ta professional rasm
          </Typography>
        </Box>

        {/* Gallery Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: { xs: 2, sm: 3, md: 4 }
        }}>
          {images.map((img, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={() => handleOpen(idx)}
            >
              <Card 
                sx={{ 
                  width: '100%',
                  height: { xs: 280, sm: 250, md: 280 },
                  borderRadius: 3,
                  overflow: "hidden", 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: 'relative',
                  '&:hover': { 
                    transform: "translateY(-12px)",
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    '& .overlay': {
                      opacity: 1
                    },
                    '& .image': {
                      transform: "scale(1.05)"
                    }
                  }
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={img.src}
                  alt={img.title}
                  className="image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: "transform 0.6s ease"
                  }}
                />

                {/* Overlay on hover */}
                <Box 
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 600,
                      mb: 1 
                    }}
                  >
                    {img.title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        bgcolor: getCategoryColor(img.category),
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: 500,
                        fontSize: '0.875rem'
                      }}
                    >
                      {img.category}
                    </Box>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: 'white',
                        bgcolor: 'rgba(255,255,255,0.2)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                      }}
                    >
                      <ZoomInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Image Preview Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -40,
              right: 0,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Box
            component="img"
            src={images[selectedImage].src}
            alt={images[selectedImage].title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 2
            }}
          />

          {/* Image info */}
          <Paper
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              bgcolor: 'rgba(0,0,0,0.7)',
              color: 'white',
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {images[selectedImage].title}
                </Typography>
                <Box 
                  sx={{ 
                    display: 'inline-block',
                    bgcolor: getCategoryColor(images[selectedImage].category),
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    mt: 1,
                    fontSize: '0.875rem'
                  }}
                >
                  {images[selectedImage].category}
                </Box>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', mt: 1 }}>
              {selectedImage + 1} / {images.length}
            </Typography>
          </Paper>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Images;