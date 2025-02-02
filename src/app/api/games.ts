import { NextApiRequest, NextApiResponse } from 'next';

const games = [
  {
    id: 1,
    name: 'Game 1',
    result: 98,
    startTime: '2023-10-01T10:00:00Z',
    closeTime: '2023-10-01T12:00:00Z',
  },
  {
    id: 2,
    name: 'Game 2',
    result: 55,
    startTime: '2023-10-02T14:00:00Z',
    closeTime: '2023-10-02T16:00:00Z',
  },
  {
    id: 3,
    name: 'Game 3',
    result: 42,
    startTime: '2023-10-03T18:00:00Z',
    closeTime: '2023-10-03T20:00:00Z',
  },
  {
    id: 4,
    name: 'Game 4',
    result: 77,
    startTime: '2023-10-04T22:00:00Z',
    closeTime: '2023-10-04T23:00:00Z',
  },
  {
    id: 5,
    name: 'Game 5',
    result: 33,
    startTime: '2023-10-05T12:00:00Z',
    closeTime: '2023-10-05T14:00:00Z',
  },
  {
    id: 6,
    name: 'Game 6',
    result: 22,
    startTime: '2023-10-06T16:00:00Z',
    closeTime: '2023-10-06T18:00:00Z',
  },

  // Add more games as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(games);
}
