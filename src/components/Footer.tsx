import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import logo from '../assets/image_17684957714146.png'
// const logo = '/attached_assets/image_1768495771414.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={logo}
              alt="Yuvani Silks"
              sx={{
                height: 80,
                mb: 3,
                // filter: 'brightness(0) invert(1)',
              }}
            />
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8, mb: 3 }}>
              Bringing the timeless elegance of authentic Banaras silk sarees to Chennai. 
              Experience the magic of handwoven traditions at Yuvani Silks.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                  },
                }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                  },
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                  },
                }}
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#D4AF37',
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Home', 'Collections', 'Gallery', 'Contact'].map((item) => (
                <Typography
                  key={item}
                  component="a"
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#D4AF37',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#D4AF37',
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Collections
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Banaras Silk Sarees',
                'Bridal Collection',
                'Designer Kurtis',
                'Daily Wear',
                'Tissue Silk',
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#D4AF37',
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                Kamaraj Ave 2nd St,<br />
                Near Poppat Jamal,<br />
                Adyar, Chennai - 600020
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Phone: +91 98765 43210
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                WhatsApp: +91 98765 43210
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 6,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} Yuvani Silks. All rights reserved. | Crafted with love in Chennai
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
