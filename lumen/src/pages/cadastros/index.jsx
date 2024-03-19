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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    async function consulta(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('As senhas nao coincidem');
            return; 
        }
        
        setError(''); 
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
                            Cadastro 
                        </Typography>
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name2"
                            label="Sobrenome"
                            name="name2"
                            autoComplete="name "
                            autoFocus
                            />
                        </Grid>
                        </Grid>

                        <Box component='form' method="post" onSubmit={consulta} sx={{ mt: 1, width: '100%',}}>
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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="cpassword"
                                label="Confirme sua senha"
                                name="cpassword"
                                type="password"
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />


                            {error && <Typography color="error" sx={{textAlign: 'center'}} >{error}</Typography>}

                            <Button               
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: 'blue' }}
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

