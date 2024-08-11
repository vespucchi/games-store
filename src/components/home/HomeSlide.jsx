import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    max-height: 700px;
    height: auto;
    display: grid;
    grid-template-columns: 8fr 2fr;
`;

const ActiveGame = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    margin: auto;
`;

const ActiveImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 15px;
`;

const GamesQueue = styled(ActiveGame)`
    max-height: inherit;
    padding: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 1%;
`

const QueueGame = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: 1fr;
    gap: 10px;
    align-items: center;

    max-height: 100%;
    width: 100%;
    box-sizing: border-box;

    color: #FAFAFA;
    font-weight: 600;
`;

const QueueImage = styled.img`
    width: 60%;
    max-height: 100%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
`;

export default function HomeSlide() {
    const games = ['Apex Legend', 'Dota 2', 'League Of Legends', 'Counter Strike 2', 'Grand Theft Auto 5', 'Smite']
    return (
        <GridContainer>
            <ActiveGame>
                <ActiveImage src="https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop191x100.628p.jpg" alt="" />
            </ActiveGame>
            <GamesQueue>
                { games.map((game) => (
                    <QueueGame key={game}>
                        <QueueImage src="https://i.redd.it/f2o8syw3nhd51.png" alt="" />
                        <p>{game}</p>
                    </QueueGame>
                ))}
            </GamesQueue>
        </GridContainer>
    )
}

