import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Container, 
  Paper,
  useTheme,
  useMediaQuery,
  Button,
  alpha
} from '@mui/material';
import {
  Calculate as MathIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  TrendingUp as TrendIcon,
  Lightbulb as IdeaIcon,
  EmojiEvents as TrophyIcon,
  ArrowForward as ArrowIcon,
  Science as ScienceIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';

const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f4ff 100%)',
      py: { xs: 4, md: 8 },
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="lg">
        {/* Sarlavha */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 8, md: 12 }
        }}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Matematika va Informatika
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Aqliy o'sish va texnologik taraqqiyot - Kelajakning ikki asosi
          </Typography>
        </Box>

        {/* Matematika bo'limi - KATTA RASM MARKAZDA */}
        <Box sx={{ 
          mb: { xs: 10, md: 16 },
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box sx={{ 
            width: '100%', 
            maxWidth: '1200px',
            position: 'relative'
          }}>
            {/* KATTA RASM - MARKAZDA */}
            <Paper
              elevation={6}
              sx={{
                width: '100%',
                height: { xs: 400, sm: 500, md: 600 },
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                mb: 6,
                mx: 'auto',
                boxShadow: '0 20px 60px rgba(63, 81, 181, 0.3)'
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Matematika"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }}
              />
              {/* Overlay gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(63, 81, 181, 0.7) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: { xs: 4, md: 6 }
                }}
              >
                <Box sx={{ color: 'white' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MathIcon sx={{ fontSize: { xs: 40, md: 60 }, mr: 2 }} />
                    <Typography variant={isMobile ? "h3" : "h2"} sx={{ fontWeight: 800 }}>
                      Matematika
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.9 }}>
                    Fanlar shohi - Aql maktabi
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Matn - RASMDAN KEYIN */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: alpha('#3f51b5', 0.05),
                    border: `2px solid ${alpha('#3f51b5', 0.1)}`,
                    height: '100%'
                  }}
                >
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    color: '#3f51b5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <PsychologyIcon /> Motivatsion So'zlar
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontStyle: 'italic', 
                    mb: 3,
                    color: '#333',
                    lineHeight: 1.4
                  }}>
                    "Har bir raqam sizni mukammallikka olib boradi. Har bir formula yangi dunyoni ochadi."
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#555',
                    lineHeight: 1.8,
                    mb: 3
                  }}>
                    Matematika nafaqat hisoblash, balki mantiqiy fikrlash, analitik qobiliyat va muammolarni yechish san'atidir. 
                    Har bir tenglama, har bir teorema sizning aql qobiliyatingizni oshiradi.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: 'white',
                    border: `2px solid ${alpha('#3f51b5', 0.2)}`,
                    height: '100%'
                  }}
                >
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    color: '#3f51b5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <SchoolIcon /> Ma'noli So'zlar
                  </Typography>
                  {[
                    "Matematika - koinotning tili",
                    "Raqamlar orqali haqiqatni topish",
                    "Mantiq va intellekt maktabi",
                    "Cheksiz imkoniyatlar dunyosi"
                  ].map((text, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendIcon sx={{ color: '#3f51b5', mr: 2,  }} />
                      <Typography variant="body1">{text}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Informatika bo'limi - KATTA RASM MARKAZDA */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box sx={{ 
            width: '100%', 
            maxWidth: '1200px',
            position: 'relative'
          }}>
            {/* KATTA RASM - MARKAZDA */}
            <Paper
              elevation={6}
              sx={{
                width: '100%',
                height: { xs: 400, sm: 500, md: 600 },
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                mb: 6,
                mx: 'auto',
                boxShadow: '0 20px 60px rgba(0, 150, 136, 0.3)'
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Informatika"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'
                  }
                }}
              />
              {/* Overlay gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0, 150, 136, 0.7) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: { xs: 4, md: 6 }
                }}
              >
                <Box sx={{ color: 'white' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CodeIcon sx={{ fontSize: { xs: 40, md: 60 }, mr: 2 }} />
                    <Typography variant={isMobile ? "h3" : "h2"} sx={{ fontWeight: 800 }}>
                      Informatika
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.9 }}>
                    Texnologiyalar olami - Kelajak san'ati
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Matn - RASMDAN KEYIN */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: alpha('#009688', 0.05),
                    border: `2px solid ${alpha('#009688', 0.1)}`,
                    height: '100%'
                  }}
                >
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    color: '#009688',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <IdeaIcon /> Motivatsion So'zlar
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontStyle: 'italic', 
                    mb: 3,
                    color: '#333',
                    lineHeight: 1.4
                  }}>
                    "Har bir kod satri sizni yangi g'oyalarga olib boradi. Har bir algoritm kelajakni quradi."
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#555',
                    lineHeight: 1.8,
                    mb: 3
                  }}>
                    Informatika - bu nafaqat dasturlash, balki muammolarni yechish, innovatsiya va raqamli transformatsiya san'atidir. 
                    Har bir loyiha, har bir texnologiya dunyoni o'zgartiradi.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: 'white',
                    border: `2px solid ${alpha('#009688', 0.2)}`,
                    height: '100%'
                  }}
                >
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    mb: 3,
                    color: '#009688',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <ScienceIcon /> Ma'noli So'zlar
                  </Typography>
                  {[
                    "Kod - zamonaviy sehrgar",
                    "Algoritmlar - aqllar kitobi",
                    "Texnologiya - kelajak quruvchi",
                    "Innovatsiya - taraqqiyot asosi"
                  ].map((text, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendIcon sx={{ color: '#009688', mr: 2 }} />
                      <Typography variant="body1">{text}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Call to Action */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 10, md: 14 },
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: 'linear-gradient(45deg, #3f51b5 0%, #009688 100%)',
            color: 'white',
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            O'rganishni Boshlang!
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Matematika mantiqni, Informatika texnologiyani o'rgatadi
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<MathIcon />}
              endIcon={<ArrowIcon />}
              sx={{
                bgcolor: 'white',
                color: '#3f51b5',
                fontWeight: 700,
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255,255,255,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Matematikani o'rganish
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<CodeIcon />}
              endIcon={<ArrowIcon />}
              sx={{
                borderColor: 'white',
                borderWidth: 2,
                color: 'white',
                fontWeight: 700,
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Dasturlashni boshlash
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Main;