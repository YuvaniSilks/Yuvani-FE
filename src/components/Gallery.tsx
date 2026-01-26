import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import banarasSaree from "../assets/image_1768497890893.png";
import tissueSaree from "../assets/image_1768498016275.png";
import embroideryKurtis from "../assets/image_1768498226493.png";
import banaras1 from "../assets/Silk Saree 1.jpeg";
import banaras2 from "../assets/Silk Saree 2.jpeg";
import banaras3 from "../assets/Silk Saree 3.jpeg";
import banaras4 from "../assets/Silk Saree 4.jpeg";
import banaras5 from "../assets/Silk Saree 5.jpeg";
import banaras6 from "../assets/Silk Saree 6.jpeg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const galleryItems = [
  {
    title: "Banaras Silk Sarees",
    image: banarasSaree,
    collection: [banaras4, banaras1, banaras2, banaras6, banaras3, banaras5],
  },
  {
    title: "Tissue Silks",
    image: tissueSaree,
    collection: [],
  },
  {
    title: "Embroidery Kurtis",
    image: embroideryKurtis,
    collection: [],
  },
];

function Gallery() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCollection, setSelectedCollection] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleOpen = (title: string, images: string[]) => {
    console.log("Opening collection:", images.length);
    setSelectedTitle(title);
    setSelectedCollection(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ position: "relative", p: 2 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{ mb: 3, textAlign: "center", color: "primary.main" }}
          >
            {selectedTitle}
          </Typography>

          <DialogContent>
            <Grid container spacing={2}>
              {selectedCollection.map((img, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "125%", // controls aspect ratio (4:5 fashion style)
                      overflow: "hidden",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`${selectedTitle} ${index + 1}`}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // 🔥 THIS makes them uniform
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Box>
      </Dialog>

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
            Featured Collection
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
            A glimpse of our exquisite collection. Visit our store to explore
            the complete range.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {galleryItems.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "120%",
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                  "&:hover .image": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  className="image"
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                <Box
                  className="overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen(item.title, item.collection);
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to top, rgba(139, 0, 0, 0.9) 0%, rgba(139, 0, 0, 0.4) 50%, transparent 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pb: 4,
                  }}
                >
                  <Box sx={{ textAlign: "center", color: "white" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#D4AF37",
                        letterSpacing: "0.15em",
                        fontWeight: 500,
                      }}
                    >
                      VIEW COLLECTION
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Gallery;
