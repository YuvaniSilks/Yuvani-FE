import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const features = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    title: 'Authenticity Guaranteed',
    description: 'Every saree comes with a guarantee of authenticity. We source directly from trusted weavers in Banaras.',
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 48 }} />,
    title: 'Premium Quality',
    description: 'We handpick each piece ensuring the finest quality silk, intricate zari work, and impeccable craftsmanship.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    title: 'Pan India Delivery',
    description: 'We deliver across India with secure packaging to ensure your saree reaches you in perfect condition.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: 'Personal Assistance',
    description: 'Our experienced staff provides personalized styling advice to help you find the perfect piece.',
  },
]

function WhyChooseUs() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#D4AF37',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Why Choose Yuvani Silks
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            We are committed to bringing you the finest silk sarees with unmatched quality and service.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: '#D4AF37',
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhyChooseUs
