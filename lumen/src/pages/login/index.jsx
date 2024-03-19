import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './style.css';

import Logo from '../../img/logo.png'



export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function consulta(e) {
        e.preventDefault()
    }
    


    return (
<Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: 5, minHeight: '100vh' }}>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', boxShadow: 3, paddingY: 2, paddingX: 2 }}>
            <img src={Logo} alt="logo" style={{ width: '100%', height: 'auto', maxHeight: '600px' }}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: 3, paddingY: 2, height: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    backgroundColor: 'white',
                    maxWidth: 500,
                    width: '100%', 
                    minHeight: '600px', 
                    justifyContent: 'center',
                    marginLeft : '4%'
                }}
            >
                        <Typography component="h1" variant="h5">
                            Login 
                        </Typography>
                        <Box component='form' method="post" onSubmit={consulta} sx={{ mt: 1, width: '100%' }}>
                            <TextField               
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: 'blue' }}
                            >
                                Entrar
                            </Button>
                            <Button               
                                href="../cadastro"
                                fullWidth
                                variant="outlined"
                                sx={{ 
                                    mt: 1, 
                                    mb: 2, 
                                    borderColor: '#1565c0',
                                    color: '#1565c0',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        borderColor: '#1565c0',
                                    }
                                }}
                            >
                                Cadastrar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" variant="body2">
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

