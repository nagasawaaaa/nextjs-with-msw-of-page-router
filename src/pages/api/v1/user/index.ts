import type { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  id: string;
  name: string;
  email: string;
}

export default function roomsHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({
    id: 'abcdefghijk',
    name: 'Mario Rossi',
    email: 'example2@example.com'
  })
}
