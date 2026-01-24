import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const collections = [
  {
    title: "Banaras Silk Sarees",
    description:
      "Exquisite handwoven Banaras silk sarees featuring traditional zari work, intricate motifs, and timeless designs. Perfect for weddings, festivals, and special occasions.",
    icon: "🪷",
    features: ["Pure Silk", "Real Zari", "Handwoven"],
  },
  {
    title: "Designer Kurtis",
    description:
      "Elegant designer kurtis crafted with premium fabrics. From casual everyday wear to festive collections, find the perfect piece for every occasion.",
    icon: "👗",
    features: ["Premium Cotton", "Designer Prints", "All Sizes"],
  },
  {
    title: "Daily Wear Collection",
    description:
      "Comfortable and stylish daily wear for the modern woman. Quality fabrics that combine comfort with contemporary fashion.",
    icon: "✨",
    features: ["Comfortable Fit", "Easy Care", "Trendy Styles"],
  },
  {
    title: "Bridal Collection",
    description:
      "Make your special day unforgettable with our exclusive bridal collection. Stunning pieces that blend tradition with modern elegance.",
    icon: "💍",
    features: ["Exclusive Designs", "Custom Orders", "Premium Quality"],
  },
];

function Collections() {
  return (
    <Box
      id="collections"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Our Collections
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Discover our curated selection of premium silk sarees, designer
            kurtis, and daily wear that celebrate the art of Indian
            craftsmanship.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {collections.map((collection, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 40px rgba(139, 0, 0, 0.15)",
                    borderColor: "secondary.main",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      mb: 2,
                      filter:
                        "grayscale(1) sepia(1) saturate(3) hue-rotate(10deg)",
                      // textShadow: '0 0 6px rgba(255, 215, 0, 0.6)',
                    }}
                  >
                    {collection.icon}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {collection.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    {collection.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: "center",
                    }}
                  >
                    {collection.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          px: 2,
                          py: 0.5,
                          backgroundColor: "rgba(212, 175, 55, 0.1)",
                          borderRadius: 1,
                          fontSize: "0.75rem",
                          color: "secondary.dark",
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Collections;
