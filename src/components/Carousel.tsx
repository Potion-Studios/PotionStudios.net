import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Box, Typography, Container } from '@mui/material';
import * as React from "react";
import {HomePageImages} from "../Constants.ts";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Carousel(): React.JSX.Element {
    return (
        <Box sx={{ height: '70vh', width: '100%' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                style={{ height: '100%', width: '100%' }}
            >
                {HomePageImages.map((slide: { url: string, title: string, subtitle: string }, index: number): React.JSX.Element => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            <Container>
                                <Typography variant="h2" sx={{ fontWeight: 800 }}>{slide.title}</Typography>
                                <Typography variant="h5" sx={{ mt: 2, fontStyle: 'italic' }}>{slide.subtitle}</Typography>
                            </Container>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}