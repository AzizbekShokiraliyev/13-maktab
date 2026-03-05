import React, { useState } from "react";
import { 
  Card, CardMedia, Typography, Box, Container, IconButton, 
  Dialog, useTheme, useMediaQuery, alpha, Grid, Stack
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn as ZoomInIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon
} from "@mui/icons-material";

// Rasmlar importi (O'zgarishsiz)
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
import img21 from '../assets/img21.jpg';
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";

const imagesData = [
  { src: img1, title: "Matematika darsi", color: "#4361ee" },
  { src: img3, title: "Dasturlash workshop", color: "#4cc9f0" },
  { src: img4, title: "Ilmiy tadqiqot", color: "#4895ef" },
  { src: img5, title: "Robototexnika", color: "#f72585" },
  { src: img6, title: "Grafik dizayn", color: "#7209b7" },
  { src: img7, title: "Sun'iy intellekt", color: "#00f5d4" },
  { src: img8, title: "Data Science", color: "#480ca8" },
  { src: img9, title: "Web dars", color: "#4cc9f0" },
  { src: img10, title: "Mobile dev", color: "#4cc9f0" },
  { src: img11, title: "Cyber security", color: "#f72585" },
  { src: img12, title: "Cloud computing", color: "#4361ee" },
  { src: img13, title: "IoT loyihasi", color: "#00f5d4" },
  { src: img14, title: "3D modeling", color: "#7209b7" },
  { src: img15, title: "Game dev", color: "#f72585" },
  { src: img16, title: "Machine Learning", color: "#00f5d4" },
  { src: img17, title: "Blockchain", color: "#4cc9f0" },
  { src: img18, title: "AR/VR", color: "#4361ee" },
  { src: img19, title: "Big Data", color: "#480ca8" },
  { src: img20, title: "DevOps", color: "#4cc9f0" },
  { src: img24, title: "Taqdirlash", color: "#480ca8" },
  { src: img23, title: "Intellektual o'yin", color: "#4361ee" },
  { src: img21, title: "Zakovat bahsi", color: "#00f5d4" },
  { src: img22, title: "Mantiqiy savollar", color: "#4cc9f0" },
  { src: img25, title: "Jamoaviy ish", color: "#4cc9f0" },
  { src: img26, title: "Final", color: "#4cc9f0" }
];

const Images = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleOpen = (idx) => {
    setSelectedIdx(idx);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleNext = () => setSelectedIdx((p) => (p + 1) % imagesData.length);
  const handlePrev = () => setSelectedIdx((p) => (p - 1 + imagesData.length) % imagesData.length);

  return (
    <Box sx={{ bgcolor: '#020617', color: 'white', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="xl">
        
        {/* Sarlavha */}
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 6, letterSpacing: 2 }}>
          GALEREYA
        </Typography>

        {/* 3 TA RASM BIR QATORDA BO'LISHI UCHUN: sm={4} md={4} */}
        <Grid container spacing={3}>
          {imagesData.map((img, idx) => (
            <Grid item xs={12} sm={4} md={4} key={idx}> 
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card 
                  onClick={() => handleOpen(idx)}
                  sx={{ 
                    borderRadius: '16px', bgcolor: '#0f172a', cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img.src}
                    alt={img.title}
                    sx={{ 
                      height: 210, // Balandlikni qat'iy belgiladik
                      width: '100%',
                      objectFit: 'cover', // Rasm buzilmasligi uchun
                      display: 'block' 
                    }}
                  />
                  
                  {/* Overlay */}
                  <Box sx={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, p: 2,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
                  }}>
                    <Typography variant="subtitle1" fontWeight={700}>{img.title}</Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lightbox Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose} PaperProps={{ sx: { bgcolor: '#020617' } }}>
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" justifyContent="flex-end" sx={{ p: 2 }}>
            <IconButton onClick={handleClose} sx={{ color: 'white' }}><CloseIcon fontSize="large"/></IconButton>
          </Stack>
          
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 20, color: 'white' }}><ChevronLeftIcon fontSize="large"/></IconButton>
            
            <img 
              src={imagesData[selectedIdx].src} 
              style={{ maxHeight: '80vh', maxWidth: '90%', borderRadius: '12px', objectFit: 'contain' }} 
              alt="selected"
            />
            
            <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 20, color: 'white' }}><ChevronRightIcon fontSize="large"/></IconButton>
          </Box>
          
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight={800}>{imagesData[selectedIdx].title}</Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Images;