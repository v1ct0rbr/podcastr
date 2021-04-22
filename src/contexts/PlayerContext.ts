import { createContext } from 'react';
import { TypeEpisodePlayer } from '../utils/types';

type PlayerContextData = {
	// episodeList: Array<TypeEpisodePlayer>
	episodeList: TypeEpisodePlayer[];
	currentEpisodeIndex: number;
	isPlaying: boolean;
	togglePlay: () => void;
	play: (episode: TypeEpisodePlayer) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);
