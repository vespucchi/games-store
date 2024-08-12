import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, act, within, fireEvent } from "@testing-library/react";
import HomeSlider from '../../components/home/HomeSlider';
import { vi } from 'vitest';

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

describe('Correct selected tab game as active in carousal', () => {
    it('should render first game in array as selected ON MOUNT', () => {
        act(() => {
            render(<HomeSlider games={games} />);
        });

        // get current active game in carousal
        const activeElementInCarousal = screen.getByRole('button', {
            name: /selected game tab in carousal/i
        });

        expect(activeElementInCarousal.id).toBe('tab-0');
    });

    it('should render clicked game in queue as active carousal element', () => {
        act(() => {
            render(<HomeSlider games={games} />);
        });

        const clickedTabLabel = 'tab-3';

        fireEvent.click(screen.getByLabelText(clickedTabLabel));

        // get current active game in carousal
        const activeElementInCarousal = screen.getByRole('button', {
            name: /selected game tab in carousal/i
        });

        expect(activeElementInCarousal.id).toBe(clickedTabLabel);
    });

    it('should render second game in queue as selected after timeout has passed for the first one', () => {
        act(() => {
            render(<HomeSlider games={games} />);
        });

        // get current active game in carousal
        const activeElementInCarousal = screen.getByRole('button', {
            name: /selected game tab in carousal/i
        });

        expect(activeElementInCarousal.id).toBe('tab-0');

        act(() => {
            vi.advanceTimersToNextTimer()
        })

        expect(activeElementInCarousal.id).toBe('tab-1');
    });

    it('should render first game in queue as selected after end of queue has been reached (restart)', async () => {

        act(() => {
            render(<HomeSlider games={games} />);
        });

        // get current active game in carousal
        const activeElementInCarousal = screen.getByRole('button', {
            name: /selected game tab in carousal/i
        });

        expect(activeElementInCarousal.id).toBe('tab-0');

        const queueLength = games.length;

        for (let i = 0; i < queueLength; i += 1) {
            act(() => {
                vi.advanceTimersToNextTimer();
            })
        }

        expect(activeElementInCarousal.id).toBe('tab-0');
    });

});