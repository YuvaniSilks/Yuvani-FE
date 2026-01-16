import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToCollections = () => {
    const element = document.querySelector('#collections')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #722F37 0%, #8B0000 30%, #A52A2A 60%, #722F37 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 2,
              backgroundColor: '#D4AF37',
              mb: 4,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              color: '#D4AF37',
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
              mb: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.08em',
              fontWeight: 600,
            }}
          >
            YUVANI SILKS
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: '#D4AF37',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              letterSpacing: '0.4em',
              mb: 5,
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            CRAFTED IN BANARAS
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 650,
              mx: 'auto',
              mb: 5,
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.9,
              opacity: 0.95,
              fontWeight: 300,
            }}
          >
            Experience the timeless elegance of authentic Banaras silk sarees. 
            Each piece is a masterwork of traditional craftsmanship, 
            handwoven with love and passed down through generations.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={scrollToCollections}
              sx={{
                backgroundColor: '#D4AF37',
                color: '#000',
                fontSize: '1rem',
                px: 5,
                py: 1.5,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#E6C556',
                },
              }}
            >
              Explore Collections
            </Button>
            <Button
              variant="outlined"
              onClick={scrollToContact}
              sx={{
                borderColor: '#D4AF37',
                color: '#D4AF37',
                fontSize: '1rem',
                px: 5,
                py: 1.5,
                '&:hover': {
                  borderColor: '#E6C556',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                },
              }}
            >
              Visit Our Store
            </Button>
          </Box>

          <Box
            sx={{
              width: 100,
              height: 2,
              backgroundColor: '#D4AF37',
              mt: 5,
            }}
          />
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '50%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
          },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid rgba(212, 175, 55, 0.5)',
            borderRadius: 15,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: 10,
              backgroundColor: '#D4AF37',
              borderRadius: 3,
              animation: 'scroll 2s infinite',
            },
            '@keyframes scroll': {
              '0%': { opacity: 1, top: 8 },
              '100%': { opacity: 0, top: 25 },
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Hero
