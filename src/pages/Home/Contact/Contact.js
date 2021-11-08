import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import contactBack from '../../../images/bg.png';

const Contact = () => {
    const contactBg = {
        background: `url(${contactBack})`,
        backgroundColor: 'rgba(54,77,86,0.9)',
        backgroundBlendMode: " darken, luminosity",
    }
    return (
        <Box style={contactBg} sx={{ flexGrow: 1, py: 5, my: 5 }}>
            <Box>
                <Typography variant="caption" sx={{ color: 'info.main', fontSize: 15 }} display="block" gutterBottom>
                    CONTACT US
                </Typography>
                <Typography variant="h4" display="block" gutterBottom sx={{ color: 'white' }}>
                    Always Contact With Us
                </Typography>
                <form>
                    <TextField

                        sx={{ width: '50%', m: 1, backgroundColor: 'white' }}

                        id="outlined-size-small"

                        defaultValue='Email Address'
                        size="small"
                    />
                    <TextField

                        sx={{ width: '50%', m: 1, backgroundColor: 'white' }}
                        id="outlined-size-small"
                        defaultValue='Subject'
                        size="small"
                    />
                    <TextField

                        sx={{ width: '50%', m: 1, backgroundColor: 'white', outline: 'none' }}
                        id="outlined-size-small"
                        multiline
                        rows={4}
                        defaultValue='Your Message'
                        size="small"
                    />
                    <br />
                    <Button variant="contained" type='submit' style={{ backgroundColor: '#59ceef' }}>
                        Learn More
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Contact;