import { http, HttpResponse } from 'msw'
import { User } from "@/mocks/types";

export const handlers = [
  http.get('/api/v1/user', () => {
    return HttpResponse.json({
      id: '123456789',
      name: 'John Doe',
      email: 'example@example.com'
    })
  })
]
