import React, { useState } from 'react';
import { 
  Box, Typography, Container, Paper, Button, alpha, Stack, Grid, 
  Accordion, AccordionSummary, AccordionDetails, List, ListItem, 
  ListItemIcon, ListItemText, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckIcon,
  EmojiEvents as TrophyIcon,
  CalendarMonth as CalendarIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon,
  Assignment as AssignmentIcon,
  Gavel as GavelIcon,
  ArrowForward as ArrowIcon,
  Lightbulb as IdeaIcon,
} from '@mui/icons-material';

// Shaffof karta komponenti (Main.jsx dagi bilan bir xil dizayn)
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

const Announcements = () => {
  const [expanded, setExpanded] = useState('section1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: '#020617', color: 'white', minHeight: '100vh', pb: 10 }}>
      
      {/* 1. HERO SECTION - FULL WIDTH IMAGE */}
      <Box sx={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.4) 0%, #020617 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', px: 2
        }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 6, color: '#f72585', fontWeight: 700 }}>
              YANGI IMKONIYATLAR
            </Typography>
            <Typography variant="h1" sx={{ 
              fontWeight: 900, fontSize: { xs: '2.5rem', md: '5rem' },
              mb: 2, background: 'linear-gradient(90deg, #fff, #f72585)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              RAQAMLI AVLOD QIZLARI
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', mx: 'auto', fontWeight: 300 }}>
              IT va innovatsiyalar sohasida o'z kelajagingizni quring. Tanlovda ishtirok eting va g'olib bo'ling!
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* 2. YO'NALISHLAR KARTALARI */}
      <Container maxWidth="lg" sx={{ mt: -10, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3}>
          <InfoCard 
            icon={<EngineeringIcon fontSize="large" />}
            title="Sun'iy Intellekt"
            text="AI texnologiyalari va zamonaviy algoritmlarni o'rganish orqali loyihalar yaratish."
            color="#f72585"
            delay={0.1}
          />
          <InfoCard 
            icon={<ScienceIcon fontSize="large" />}
            title="Yashil Texnologiyalar"
            text="Ekologik muammolarni IT yordamida hal qilish va innovatsion yechimlar topish."
            color="#4cc9f0"
            delay={0.2}
          />
          <InfoCard 
            icon={<IdeaIcon fontSize="large" />}
            title="EdTech Loyihalar"
            text="Ta'lim tizimini raqamlashtirish va o'quvchilar uchun qulay platformalar yaratish."
            color="#4361ee"
            delay={0.3}
          />
        </Grid>
      </Container>

      {/* 3. NIZOM VA QOIDALAR (DARK STYLE ACCORDION) */}
      <Container maxWidth="md" sx={{ mt: 15 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={800} sx={{ mb: 6, textAlign: 'center', background: 'linear-gradient(90deg, #fff, #4cc9f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Tanlov Nizomi
          </Typography>

          <Box sx={{ '& .MuiAccordion-root': { bgcolor: 'rgba(255,255,255,0.02)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', mb: 2, borderRadius: '15px !important', overflow: 'hidden' } }}>
            
            <Accordion expanded={expanded === 'section1'} onChange={handleChange('section1')} elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4cc9f0' }} />}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <AssignmentIcon sx={{ color: '#4cc9f0' }} />
                  <Typography fontWeight={600}>Umumiy Shartlar</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', bgcolor: 'rgba(255,255,255,0.01)' }}>
                <List>
                  <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary= "Mazkur Nizom iqtidorli qizlarni kashf qilish hamda ularning ilmiy-tadqiqot va innovatsion faoliyatini samarali yo'lga qo'yish uchun qo'shimcha shart-sharoitlar yaratish va qo'llab-quvvatlashga qaratilgan."/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary="Ishtirokchilar yoshi: 16 yoshdan 30 yoshgacha." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary="Loyiha tili: O'zbek yoki Ingliz tili." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary="Tanlov 'ta'lim', 'sun'iy intellekt', 'iqlim o'zgarishi', 'yashil iqtisodiyot' kabi yo'nalishlarni qamrab oladi." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary= "Tanlov jarayonlari to'liq video tasvirga olinadi hamda tegishli bosqich tashkiliy qo'mitasi tomonidan kamida bir yil saqlanadi." />
                  </ListItem>
                   <ListItem>
                    <ListItemIcon><CheckIcon sx={{ color: '#4cc9f0' }} /></ListItemIcon>
                    <ListItemText primary=                   "Tanlovning bir bosqichidan keyingi bosqichiga o'tish vaqtida loyiha nomi va yo'nalishi o'zgartirilmaydi." />
                  </ListItem>            
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'section2'} onChange={handleChange('section2')} elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#f72585' }} />}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GavelIcon sx={{ color: '#f72585' }} />
                  <Typography fontWeight={600}>Baholash Mezonlari</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', bgcolor: 'rgba(255,255,255,0.01)' }}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', p: 1 }}>
                  Loyihalar innovatsionlik, amaliy ahamiyat va texnik murakkablik darajasi bo'yicha mustaqil hakamlar tomonidan 100 ballik tizimda baholanadi.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </motion.div>

        {/* 4. CALL TO ACTION */}
        <Box sx={{ mt: 15, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={800} sx={{ mb: 4 }}>
            Imkoniyatni Qo'ldan Boy Bermang
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowIcon />}
              sx={{ 
                bgcolor: '#f72585', px: 6, py: 2, borderRadius: '50px', fontWeight: 700,
                '&:hover': { bgcolor: '#b5179e', transform: 'scale(1.05)' },
                transition: '0.3s'
              }}
            >
              Ro'yxatdan o'tish
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ 
                borderColor: '#4cc9f0', color: '#4cc9f0', px: 6, py: 2, borderRadius: '50px', fontWeight: 700,
                '&:hover': { borderColor: '#fff', color: '#fff', bgcolor: 'rgba(76, 201, 240, 0.1)' },
                transition: '0.3s'
              }}
            >
              Nizomni yuklash
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Announcements;