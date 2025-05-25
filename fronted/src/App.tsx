import './App.css'
import { sampleProducts } from './data.ts'
import { Header } from './components/Header.tsx'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <Grid container spacing={2}>
            {sampleProducts.map((product) => (
              <Grid key={product.name} size={{ md: 4 }}>
                <Card>
                  <CardMedia
                    component="img"
                    src={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary' }}
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      <footer>All right reserved</footer>
    </>
  )
}

export default App
