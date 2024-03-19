import React from "react";
import BarraMaldita from "../../components/BarraMaldita/BarraMaldita.jsx";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import './style.css';

export default function Inicio() {
    
    const dados = [
        {
            icone: <MenuBookIcon />,
            titulo: "LIVROS CADASTRADOS",
            total: "150", 
        },
        {
            icone: <AccessTimeIcon />,
            titulo: "LIVROS PENDENTES",
            total: "20", 
        },
        {
            icone: <LocalLibraryIcon />,
            titulo: "LIVROS EMPRESTADOS",
            total: "70", 
        },
        {
            icone: <PeopleIcon />,
            titulo: "USUÁRIOS CADASTRADOS",
            total: "300", 
        }
    ];

    return (
        <body style={{backgroundColor: '#f0f7fa'}}>
            <BarraMaldita />
            <Grid container spacing={4} style={{ padding: '20px', justifyContent: 'center', }}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent style={{ textAlign: 'center' , padding: 55 }}>
                            {dados[0].icone}
                            <Typography variant="h5" component="h2" gutterBottom>
                                {dados[0].titulo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                TOTAL: {dados[0].total}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{ marginTop: '20px' , padding: 55 }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            {dados[2].icone}
                            <Typography variant="h5" component="h2" gutterBottom>
                                {dados[2].titulo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                TOTAL: {dados[2].total}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent style={{ textAlign: 'center' , padding: 55 }}>
                            {dados[1].icone}
                            <Typography variant="h5" component="h2" gutterBottom>
                                {dados[1].titulo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                TOTAL: {dados[1].total}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{ marginTop: '20px', padding: 55 }}>
                        <CardContent style={{ textAlign: 'center' }}>
                            {dados[3].icone}
                            <Typography variant="h5" component="h2" gutterBottom>
                                {dados[3].titulo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                TOTAL: {dados[3].total}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </body>
    );
}
