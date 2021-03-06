import {Dimensions} from 'react-native';

export enum SCREEN {
    LOGIN = 'login',
    SIGNUP = 'signup',
    LIST = 'list',
    RECIPE = 'recipe',
};

export const WINDOW = Dimensions.get('window');

export const HEADER_HEIGHT = 80;
export const FOOTER_HEIGHT = 80;
export const TABS_HEIGHT = 75;
