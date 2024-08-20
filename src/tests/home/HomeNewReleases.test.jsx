import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, act, within, fireEvent } from "@testing-library/react";
import HomeNewReleases from '../../components/home/HomeNewReleases';
import { createMemoryHistory } from 'history';
import { vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

const games = [
    {
        title: 'Apex Legends',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
    {
        title: 'Dota 2',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
    {
        title: 'League Of Legends',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
    {
        title: 'Counter Strike 2',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
    {
        title: 'Grand Theft Auto 5',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
    {
        title: 'Smite',
        image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg',
    },
];

describe('Correct collection tab redirect on click', () => {
    it('should render top new releases collection tab on click', async () => {
        
    });
});