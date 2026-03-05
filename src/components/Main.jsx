import React from 'react';
import { 
  Box, Typography, Container, Paper, Button, alpha, Stack, Grid 
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Calculate as MathIcon,
  Code as CodeIcon,
  Psychology as PsychologyIcon,
  TrendingUp as TrendIcon,
  Lightbulb as IdeaIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';

// Shaffof karta komponenti
const InfoCard = ({ icon, title, text, color, delay }) => (
  <Grid item xs={12} md={4}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: `1px solid ${alpha(color, 0.2)}`,
          transition: '0.3s',
          '&:hover': {
            background: alpha(color, 0.05),
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 30px ${alpha(color, 0.1)}`
          }
        }}
      >
        <Box sx={{ color: color, mb: 2 }}>{icon}</Box>
        <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color: '#fff' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          {text}
        </Typography>
      </Paper>
    </motion.div>
  </Grid>
);

const Main = () => {
  return (
    <Box sx={{ bgcolor: '#020617', color: 'white', Height: '100vh', pb: 10 }}>
      
      {/* 1. HERO SECTION - FULL WIDTH IMAGE */}
      <Box sx={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        
        {/* Rasm ustidagi matn va gradient */}
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.3) 0%, #020617 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', px: 2
        }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 6, color: '#4cc9f0', fontWeight: 700 }}>
              13-MAKTAB AKADEMIYASI
            </Typography>
            <Typography variant="h1" sx={{ 
              fontWeight: 900, fontSize: { xs: '3rem', md: '6rem' },
              mb: 2, background: 'linear-gradient(90deg, #fff, #4cc9f0)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              MATEMATIKA
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', mx: 'auto', fontWeight: 300 }}>
              Fanlar shohi orqali koinot sirlarini va mantiqiy mukammallikni kashf eting.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* 2. MATEMATIKA KARTALARI (BIR QATORDA) */}
      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <InfoCard 
            icon={<PsychologyIcon fontSize="large" />}
            title="Motivatsion So'zlar"
            text='"Har bir raqam sizni mukammallikka olib boradi. Har bir formula yangi dunyoni ochadi."'
            color="#4361ee"
            delay={0.1}
          />
          <InfoCard 
            icon={<TrendIcon fontSize="large" />}
            title="Analitik Qobiliyat"
            text="Matematika nafaqat hisoblash, balki muammolarni yechish san'atidir."
            color="#4cc9f0"
            delay={0.2}
          />
          <InfoCard 
            icon={<IdeaIcon fontSize="large" />}
            title="Mantiq Maktabi"
            text="Har bir tenglama sizning aql qobiliyatingizni yangi bosqichga olib chiqadi."
            color="#4895ef"
            delay={0.3}
          />
        </Grid>
      </Container>

      {/* 3. INFORMATIKA SECTION - FULL WIDTH IMAGE */}
      <Box sx={{ position: 'relative', width: '100%', height: '80vh', mt: 15, overflow: 'hidden' }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.3) 0%, #020617 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', px: 2
        }}>
          <Typography variant="h1" sx={{ 
            fontWeight: 900, fontSize: { xs: '3rem', md: '6rem' },
            mb: 2, background: 'linear-gradient(90deg, #fff, #00f5d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            INFORMATIKA
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', mx: 'auto', fontWeight: 300 }}>
            Texnologiyalar olami va dasturlash orqali kelajakni o'z qo'lingiz bilan quring.
          </Typography>
        </Box>
      </Box>

      {/* 4. INFORMATIKA KARTALARI (BIR QATORDA) */}
      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <InfoCard 
            icon={<CodeIcon fontSize="large" />}
            title="Kod - Sehrgarlik"
            text="Har bir kod satri sizni yangi g\'oyalarga olib boradi. Har bir algoritm kelajakni quradi."
            color="#00f5d4"
            delay={0.1}
          />
          <InfoCard 
            icon={<IdeaIcon fontSize="large" />}
            title="Innovatsiya"
            text="Informatika - bu muammolarni yechish va raqamli transformatsiya san'atidir."
            color="#00bbf9"
            delay={0.2}
          />
          <InfoCard 
            icon={<ArrowIcon fontSize="large" />}
            title="Kelajak Quruvchisi"
            text="Har bir loyiha va yangi texnologiya butun dunyoni o'zgartirishga qodir."
            color="#00d2ff"
            delay={0.3}
          />
        </Grid>

        {/* 5. CALL TO ACTION - PASTKI QISM */}
        <Box sx={{ mt: 15, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={800} sx={{ mb: 4 }}>
            Sayohatni Hozir Boshlang
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#4361ee', px: 6, py: 2, borderRadius: '50px', fontWeight: 700,
                '&:hover': { bgcolor: '#3a0ca3', transform: 'scale(1.05)' }
              }}
            >
              Matematika Kursi
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ 
                borderColor: '#00f5d4', color: '#00f5d4', px: 6, py: 2, borderRadius: '50px', fontWeight: 700,
                '&:hover': { borderColor: '#fff', color: '#fff' }
              }}
            >
              Dasturlash Kursi
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;