import { City } from '../../types/city';

const baseImgUrl = 'app/components/city/images/';

export const CITY: City[] = [
    {
        id: 1, 
        name: 'New York',
        imgUrl: baseImgUrl + 'b1.jpg',
        followers: 2850,
        following: 675
    },
    {
        id: 2, 
        name: 'Los Angeles',
        imgUrl: baseImgUrl + 'b2.jpg',
        followers: 10346,
        following: 2345
    },
    {
        id: 3, 
        name: 'Chicago',
        imgUrl: baseImgUrl + 'b3.jpg',
        followers: 5994,
        following: 78
    },
    {
        id: 4, 
        name: 'Houston',
        imgUrl: baseImgUrl + 'b4.jpg',
        followers: 7694,
        following: 89
    },
    {
        id: 5, 
        name: 'Philadelphia',
        imgUrl: baseImgUrl + 'b5.jpg',
        followers: 3267,
        following: 12
    }
];