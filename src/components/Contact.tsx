import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const PHONE_NUMBER = '+919876543210'
const WHATSAPP_NUMBER = '919876543210'

function Contact() {
  const handleCall = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I am interested in your silk saree collection. Please share more details.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  const handleDirections = () => {
    const address = encodeURIComponent('Yuvani Silks, Kamaraj Ave 2nd St, Venkata Rathinam Nagar, Adyar, Chennai, Tamil Nadu 600020')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFF5E6 0%, #FFFAF0 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Visit Our Store
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Experience our collection in person. Our friendly staff is ready to help you find the perfect saree.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', backgroundColor: 'primary.main', color: 'white' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                  <LocationOnIcon sx={{ fontSize: 32, color: '#D4AF37', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1, color: '#D4AF37' }}>
                      Store Location
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.95 }}>
                      Yuvani Silks<br />
                      Kamaraj Ave 2nd St,<br />
                      Near Poppat Jamal,<br />
                      Venkata Rathnam Nagar Extension,<br />
                      Venkata Rathinam Nagar, Adyar,<br />
                      Chennai, Tamil Nadu 600020
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={handleDirections}
                      sx={{
                        mt: 2,
                        borderColor: '#D4AF37',
                        color: '#D4AF37',
                        '&:hover': {
                          borderColor: '#D4AF37',
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        },
                      }}
                    >
                      Get Directions
                    </Button>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                  <AccessTimeIcon sx={{ fontSize: 32, color: '#D4AF37', mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1, color: '#D4AF37' }}>
                      Store Hours
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.95 }}>
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    mb: 4,
                    textAlign: 'center',
                  }}
                >
                  Get in Touch
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PhoneIcon />}
                    onClick={handleCall}
                    sx={{
                      backgroundColor: 'primary.main',
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Call Us: +91 98765 43210
                  </Button>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsApp}
                    sx={{
                      backgroundColor: '#25D366',
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: '#128C7E',
                      },
                    }}
                  >
                    WhatsApp Us
                  </Button>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                    }}
                  >
                    "Experience the elegance of authentic Banaras silk. 
                    Visit us today and discover your perfect saree."
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              backgroundColor: '#e0e0e0',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Yuvani+Silks,+Kamaraj+Ave+2nd+St,+Adyar,+Chennai,+Tamil+Nadu+600020&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yuvani Silks Location"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
