import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
  alpha
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckIcon,
  Groups as GroupsIcon,
  School as SchoolIcon,
  EmojiEvents as TrophyIcon,
  CalendarMonth as CalendarIcon,
  Female as FemaleIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon,
  Apartment as ApartmentIcon,
  Gavel as GavelIcon,
  Assignment as AssignmentIcon,
  AccountBalance as BalanceIcon,
  TrendingUp as TrendingIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

const Announcements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Accordion state
  const [expanded, setExpanded] = useState('section1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Bosqichlar
  const steps = [
    {
      label: "Tuman (Shahar) Bosqichi",
      description: "Maktab o'quvchilarining 'kuzgi ta'til' davrida",
      date: "Sentyabr-Oktabr",
      organizer: "Tuman/shahar ta'lim bo'limlari"
    },
    {
      label: "Viloyat Bosqichi",
      description: "Maktab o'quvchilarining 'qishki ta'til' davrida",
      date: "Dekabr-Yanvar",
      organizer: "Viloyat ta'lim boshqarmalari"
    },
    {
      label: "Respublika Bosqichi",
      description: "Asosiy tashkilotchilar belgilagan muddatlarda",
      date: "Mart-Aprel",
      organizer: "Respublika tashkiliy qo'mitasi"
    }
  ];

  // Yo'nalishlar
  const directions = [
    { name: "Ta'lim va ilm", icon: <SchoolIcon />, color: "#3f51b5" },
    { name: "Sun'iy Intellekt", icon: <EngineeringIcon />, color: "#2196f3" },
    { name: "Iqlim O'zgarishi", icon: <ScienceIcon />, color: "#4caf50" },
  ];

  // Yosh toifalari
  const ageCategories = [
    { range: "16-20 yosh", participants: "O'rta ta'lim o'quvchilari" },
    { range: "21-30 yosh", participants: "Oliy ta'lim talabalari va yosh mutaxassislar" }
  ];

  // Tashkilotchilar
  const organizers = [
    { name: "Maktabgacha va maktab ta'limi vazirligi", role: "Asosiy tashkilotchi" },
    { name: "Ixtisoslashtirilgan ta'lim muassasalari agentligi", role: "Asosiy tashkilotchi" },
    { name: "Bolalar kontentini rivojlantirish markazi", role: "Asosiy tashkilotchi" },
    { name: "Digital Generation Uzbekistan", role: "Nodavlat notijorat tashkiloti" }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7ff 0%, #fff0f7 100%)',
      py: { xs: 3, md: 5 }
    }}>
      <Container maxWidth="lg">
        {/* Sarlavha */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 6 },
          position: 'relative'
        }}>
          <Chip 
            label="Rasmiy E'lon" 
            color="primary" 
            sx={{ 
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: '0.8rem', sm: '0.9rem' }
            }}
          />
          
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #e91e63 30%, #9c27b0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            "Raqamli Avlod Qizlari" Tanlovi
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Iqtidorli qizlarni kashf qilish hamda ularning ilmiy-tadqiqot va innovatsion 
            faoliyatini samarali yo'lga qo'yish uchun qo'shimcha shart-sharoitlar yaratish
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2,
            flexWrap: 'wrap',
            mt: 4
          }}>
            <Chip 
              icon={<FemaleIcon />} 
              label="Faqat Qizlar" 
              color="secondary"
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              icon={<TrophyIcon />} 
              label="3 Bosqichli" 
              sx={{ 
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                fontWeight: 600
              }}
            />
            <Chip 
              icon={<CalendarIcon />} 
              label="2024-2025" 
              sx={{ 
                bgcolor: alpha(theme.palette.success.main, 0.1),
                color: theme.palette.success.main,
                fontWeight: 600
              }}
            />
          </Box>
        </Box>

        {/* Tanlov Bosqichlari */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 4 },
            mb: { xs: 4, md: 5 },
            borderRadius: 3,
            background: 'white',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#e91e63' }}>
            Tanlov Bosqichlari
          </Typography>
          
          <Stepper orientation={isMobile ? "vertical" : "horizontal"}>
            {steps.map((step) => (
              <Step key={step.label} active={true}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      '& .MuiStepIcon-root': {
                        color: '#e91e63',
                        width: 32,
                        height: 32
                      }
                    }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ mt: 1, pl: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 1 }}>
                      <CalendarIcon sx={{ fontSize: 16, color: '#e91e63' }} />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        {step.date}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Tashkilotchi: {step.organizer}
                    </Typography>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* Grid Layout */}
        <Grid container spacing={4}>
          {/* Yo'nalishlar */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 3,
                background: 'white',
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#3f51b5' }}>
                Yo'nalishlar
              </Typography>
              
              <Grid container spacing={2}>
                {directions.map((dir) => (
                  <Grid item xs={6} key={dir.name}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        width: '200px',
                        background: alpha(dir.color, 0.05),
                        border: `2px solid ${alpha(dir.color, 0.2)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: dir.color,
                          boxShadow: `0 8px 24px ${alpha(dir.color, 0.15)}`
                        }
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: dir.color, 
                            width: 56, 
                            height: 56,
                            mx: 'auto',
                            mb: 2,
                            mt: 2
                          }}
                        >
                          {dir.icon}
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: dir.color }}>
                          {dir.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Yosh Toifalari */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 3,
                background: 'white',
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#2196f3' }}>
                Yosh Toifalari
              </Typography>
              
              <List>
                {ageCategories.map((category, index) => (
                  <React.Fragment key={category.range}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Avatar sx={{ bgcolor: '#2196f3' }}>
                          {index + 1}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {category.range}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {category.participants}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < ageCategories.length - 1 && <Divider variant="inset" />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Accordion Sections */}
        <Box sx={{ mt: 5 }}>
          <Accordion 
            expanded={expanded === 'section1'} 
            onChange={handleChange('section1')}
            sx={{ 
              mb: 2,
              borderRadius: '12px !important',
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                borderRadius: '12px'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AssignmentIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  I. Umumiy Qoidalar
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <List sx={{ pl: 2 }}>
                {[
                  "Mazkur Nizom iqtidorli qizlarni kashf qilish hamda ularning ilmiy-tadqiqot va innovatsion faoliyatini samarali yo'lga qo'yish uchun qo'shimcha shart-sharoitlar yaratish va qo'llab-quvvatlashga qaratilgan.",
                  "Tanlovda ikki yosh toifasidagi: 16-20 yosh va 21-30 yoshli qizlar o'rtasida g'oliblar aniqlanadi.",
                  "Tanlov 'ta'lim', 'sun'iy intellekt', 'iqlim o'zgarishi', 'yashil iqtisodiyot' kabi yo'nalishlarni qamrab oladi.",
                  "Tanlov jarayonlari to'liq video tasvirga olinadi hamda tegishli bosqich tashkiliy qo'mitasi tomonidan kamida bir yil saqlanadi.",
                  "Tanlovning bir bosqichidan keyingi bosqichiga o'tish vaqtida loyiha nomi va yo'nalishi o'zgartirilmaydi."
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <CheckIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'section2'} 
            onChange={handleChange('section2')}
            sx={{ 
              mb: 2,
              borderRadius: '12px !important',
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                bgcolor: alpha(theme.palette.secondary.main, 0.05),
                borderRadius: '12px'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ApartmentIcon color="secondary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  II. Tanlovni Tashkil Etish Tartibi
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#e91e63' }}>
                Tashkiliy Qo'mita
              </Typography>
              <Typography paragraph>
                Tashkiliy qo'mitaning vazifalari quyidagilardan iborat:
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {[
                  "Tanlovning joriy yildagi asosiy ixtisoslik yo'nalishini belgilash",
                  "Tanlov o'tkaziladigan joyni belgilash va o'tkazish",
                  "Hakamlar hay'ati tarkibini belgilash",
                  "Tanlov natijalarini ommaviy axborot vositalarida yoritish",
                  "Barcha tanlov ishtirokchilari haqidagi ma'lumotlarni axborot tizimiga kiritish"
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                      <CheckIcon sx={{ color: '#4caf50', fontSize: 20, mt: 0.5 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#2196f3' }}>
                Hakamlar Hay'ati
              </Typography>
              <Typography paragraph>
                Tanlovning barcha bosqichlarida tashkiliy qo'mita tomonidan 3 kishidan 7 kishigacha tarkibda hakamlar hay'ati tuziladi.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'section3'} 
            onChange={handleChange('section3')}
            sx={{ 
              mb: 2,
              borderRadius: '12px !important',
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                bgcolor: alpha(theme.palette.success.main, 0.05),
                borderRadius: '12px'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <GavelIcon color="success" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  III. Qatnashish Tartibi
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <Alert severity="info" sx={{ mb: 3 }}>
                Tanlovda ishtirok etish istagida bo'lgan talabgorlar maxsus onlayn platformada ro'yxatdan o'tishlari talab etiladi.
              </Alert>
              
              <List>
                {[
                  "Tanlov ishtirokchilari individual yoki ikki kishidan iborat jamoa sifatida ishtirok etishlari mumkin.",
                  "Har bir jamoa yoki individual ishtirokchi barcha bosqichlarda ro'yxatdan o'tgan loyihasi bo'yicha ishtirok etadi.",
                  "Tanlovning bir bosqichidan keyingi bosqichiga o'tish vaqtida loyihani kuchaytirish maqsadida jamoaga qo'shimcha ishtirokchi jalb etish mumkin.",
                  "Jamoaning dastlabki a'zosi o'zgartirilmaydi."
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <TrendingIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Tashkilotchilar */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 4 },
            mt: 5,
            borderRadius: 3,
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
            Asosiy Tashkilotchilar
          </Typography>
          
          <Grid container spacing={3}>
            {organizers.map((org) => (
              <Grid item xs={12} sm={6} key={org.name}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  p: 2,
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Avatar sx={{ bgcolor: 'white', color: '#764ba2' }}>
                    <BalanceIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {org.name}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      {org.role}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 6,
          p: 4,
          borderRadius: 3,
          background: 'white',
          border: '2px dashed',
          borderColor: '#e91e63'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#e91e63' }}>
            Tanlovda Qatnashing!
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
            Raqamli kelajakni shakllantirishda faol rol o'ynash uchun ajoyib imkoniyat.
            Loyihangiz bilan ro'yxatdan o'ting va g'olib bo'ling!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              endIcon={<ArrowIcon />}
              sx={{ 
                bgcolor: '#e91e63',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': { bgcolor: '#d81b60' }
              }}
            >
              Ro'yxatdan O'tish
            </Button>
            
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: '#e91e63',
                color: '#e91e63',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': { 
                  borderColor: '#d81b60',
                  bgcolor: 'rgba(233, 30, 99, 0.04)'
                }
              }}
            >
              Nizomni Yuklab Olish
            </Button>
          </Box>
          
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
            So'nggi muddat: 2024 yil 15 Oktyabr
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Announcements;